<template>
  <div>
    <div class="row">
      <div id="carouselExampleIndicators" class="carousel slide ko-b-box" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="banner-box">
              <div class="banner-item flex ai-center jc-center" style="background: #C8C8A9;">
                <h1>css 系列</h1>
              </div>
            </div>
          </div>
          <div class="carousel-item" style="background: #FC9D9A;">
            <div class="banner-box">
              <div class="banner-item flex ai-center jc-center" style>
                <h1>Deno 系列</h1>
              </div>
            </div>
          </div>
          <div class="carousel-item" style="background: #20a8fe;">
            <div class="banner-box">
              <div class="banner-item flex ai-center jc-center" style>
                <h1>关于本站</h1>
              </div>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ko-banner"

};
</script>
<style scoped>
  .ko-b-box {
    width: 100%;
  }
  .banner-box {
    width: 100%;
    padding-bottom: 40%;
    position: relative;
  }
  .banner-box .banner-item{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0; 
  }
  .banner-box .banner-item h1{
    text-align: center;
    color: #fff;
    line-height: 1.5;
  }
</style>