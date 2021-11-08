import Vue from 'vue'
import Vuex from 'vuex'

import counter from "./counter";

import axiosConfig from "@/apis/axiosConfig";
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  //루트 상태 정의
  state: {
    userId: "",
    authToken: "",
  },
  //루트 상태 값을 읽는 메소드 정의(Getter)
  getters: {
    getUserId(state, payload) {
      return state.userId;
    },
    getAuthToken(state) {
      return state.authToken;
    },
  },
  //루트 상태 값을 변경하는 동기 메소드 정의(Setter)
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },
    setAuthToken(state, payload){
      state.authToken = payload;
    },
  },
  //루트 상태 값을 변경하는 비동기 메소드 정의(Setter)
  actions: {
    setUserIdByAsync(context, payload) { //paylaod = {userId:xxx, duration:3000}
      new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit("setUserId", payload.userId);
          resolve(context.state.userId);
        }, payload.duration);
      })
      .then((data) => {
        console.log(`userId 상태 변경 성공: ${data}`);
      })
      .catch((err) => {
        console.log(`userId 상태 변경 실패: ${err}`);
      });
    },

    saveAuth(context, payload) { //payout={userId:xxx, authToken:xxx}
      // 상태 저장
      context.commit("setUserId", payload.userId);
      context.commit("setAuthToken", payload.authToken);
      // 세션 스토리지에 저장하여 새로고침해도 사라지지 않게 함.
      sessionStorage.setItem("userId", payload.userId);
      sessionStorage.setItem("authToken", payload.authToken);
      // 로그인 성공 후에 Axios의 공통 헤더에 Authorization을 추가
      axiosConfig.addAuthHeader(payload.authToken);
    },

    loadAuth(context, payload) {
      // 세션 스토리지에 저장된 내용을 읽어서 상태 복원
      context.commit("setUserId", sessionStorage.getItem("userId") || "");
      context.commit("setAuthToken", sessionStorage.getItem("authToken") || "");
      //authToken이 있을 경우, Axios의 공통 헤더에 Authorization을 추가
      if(context.state.authToken !== "") {
        axiosConfig.addAuthHeader(context.state.authToken);
      }
    },

    deleteAuth(context, payload) {
      context.commit("setUserId", "");
      context.commit("setAuthToken", "");
      sessionStorage.removeItem("userId");
      sessionStorage.removeItem("authToken");
      axiosConfig.removeAuthHeader();
    }
  },

  //루트가 아닌 자식 상태를 정의한 모듈을 가져오기
  modules: {
    counter,
  }
})
