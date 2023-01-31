<template>
  <div class="footer">
    <div class="footer_block">
    <div class="footer_block-item">
      <div class="footer_block-item--mail">
        <p>Email:</p>
        <a href="mailto: aaaaaa.org">aaaaaaa@aaaaa.org></a>
      </div>
      <div class="footer_block-item--addres">
        <p>Sultan Business Centre, Office 410, Oud Metha, Dubai, UAE</p>
      </div>
      <div class="footer_block-item--info">
      <p>© 2021 SMAN Group | All Rights Reserved | </p>
      </div>
    </div>
    <div class="footer_block-logo">

    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  background-color: #00011a;
  min-height: 360px;
  padding: 80px;
}
.footer_block {
  display: flex;
  justify-content: center;
  color: white;
  width: 100%;
}
.footer_block-item{
  width: 70%;
}
.footer_block-logo {
  width: 30%;
}
.footer_block-item--mail {
  display: flex;
}
</style>
