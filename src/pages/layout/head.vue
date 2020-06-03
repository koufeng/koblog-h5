<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light nav-color-nav navbar-lk text-dark">
      <div class="container">
        <a class="navbar-brand xiyuan" href="/">
          <img src="../../assets/img/logo.png" alt />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#nabmune"
          aria-controls="nabmune"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="nabmune">
          <ul class="navbar-nav nav-color">
            <li class="nav-item active">
              <a class="nav-link" @click="$router.push(`/`)">
                首页
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push(`/`)">系列</a>
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >分类</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" @click="$router.push(`/`)">deno</a>
                <a class="dropdown-item" @click="$router.push(`/`)">css</a>
                <!-- <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="category.html">jq</a> -->
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push(`/`)">传送门</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push(`/`)">杂货铺</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" @click="$router.push(`/`)">养生</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "ko-head"
};
</script>
<style>
</style>