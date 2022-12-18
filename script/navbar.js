function navbar() {
  return `
   <section class="navbar-bg">
    <div id="navbar" class="container">
      <div class="navbar-left">
        <a href="./index.html" class="logo"><i class="fa-brands fa-linkedin"></i></a>
        <div class="search-box">
          <i class="ph-magnifying-glass"></i>
          <input type="text" placeholder="Search">
        </div>
      </div>

      <div class="navbar-center">
        <div class="work search"><i class="ph-magnifying-glass"></i><span>Search<span></div>
        <div class="work"><a href="/pages/home.html"><i class="ph-house-fill"></i><span>Home</span></a></div>
        <div class="work"><a href="/pages/network.html"><i class="ph-users-three-fill"></i><span>My Network</span></a></div>
        <div class="work"><a href="/pages/jobs.html"><i class="ph-suitcase-simple-fill"></i><span>Jobs</span></a></div>
        <div class="work"><a href="/pages/message.html"><i class="ph-chat-teardrop-dots-fill"></i><span>Messaging</span></a></div>
        <div class="work"><a href="/pages/notification.html"><i class="ph-bell-fill"></i><span>Notifications</span></a></div>
        <div class="online">
          <div class="work"><img src="/img/profile.jpg" class="profile-img"><span>Me</span></div>
        </div>
        <div class="work nine-dots"><i class="ph-dots-nine-bold"></i><span>Work</span></div>
        <div class="work try-premium"><a class="try-premium" href="#">Try Premium for </a>free</div>

      </div>
    </div>
  </section>
  `;
}
export default navbar;