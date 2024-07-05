<template>
    <div >
        <a id="custom-login-btn" @click="kakaoLogin()">
            <img
                src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
                width="222"
            />
        </a>
    </div>
</template>

<script>
export default {
  name: 'kakaoLogin',
  methods: {
    kakaoLogin () { // 로그인 화면
      console.log(window.kakao)
      window.Kakao.Auth.login({
        scope: 'profile_nickname',
        success: this.getKakaoAccount
      })
    },

    getKakaoAccount () {
      window.Kakao.API.request({
        url: '/v2/user/me',
        success: res => {
          const kakaoaccount = res.kakao_account
          const nickname = kakaoaccount.nickname
          console.log('nickname', nickname)
          alert('로그인 성공')
        },
        fail: error => {
          console.log(error)
        }
      })
    },

    kakaoLogout () { // 로그인 화면
      window.Kakao.Auth.logout((reponse) => {
        console.log(reponse)
      })
    }

  }
}

</script>
