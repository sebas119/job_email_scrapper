/**
 * Footer component to visualize the brand
 * @date 2020-06-22
 */
export default function FooterComponent() {
  return (
    <div>
      {/* Footer */}
      <footer className="site-footer">
        <div className="site-footer-right">
          Crafted with <i className="red-600 icon md-favorite"></i> by
        <a href="https://github.com/sebas119/job_email_scrapper" target="_blank"> FiveMinutesProblem Team</a>
        </div>
      </footer>
      {/* Core  */}
      <script src="/assets/vendor/babel-external-helpers/babel-external-helpers.js"></script>
      <script src="/assets/vendor/jquery/jquery.js"></script>
      <script src="/assets/vendor/popper-js/umd/popper.min.js"></script>
      <script src="/assets/vendor/bootstrap/bootstrap.js"></script>
      <script src="/assets/vendor/animsition/animsition.js"></script>
      <script src="/assets/vendor/mousewheel/jquery.mousewheel.js"></script>
      <script src="/assets/vendor/asscrollbar/jquery-asScrollbar.js"></script>
      <script src="/assets/vendor/asscrollable/jquery-asScrollable.js"></script>
      <script src="/assets/vendor/waves/waves.js"></script>

      {/* Plugins */}
      <script src="/assets/vendor/chartist/chartist.min.js"></script>
      <script src="/assets/vendor/chartist-plugin-tooltip/chartist-plugin-tooltip.js"></script>
      <script src="/assets/vendor/chart-js/Chart.js"></script>

      {/* Scripts */}
      <script src="/assets/js/Component.js"></script>
      <script src="/assets/js/Plugin.js"></script>
      <script src="/assets/js/Base.js"></script>
      <script src="/assets/js/Config.js"></script>

      <script src="/assets/js/Section/Menubar.js"></script>
      <script src="/assets/js/Section/Sidebar.js"></script>
      <script src="/assets/js/Section/PageAside.js"></script>
      <script src="/assets/js/Plugin/menu.js"></script>

      {/* Config */}
      <script src="/assets/js/config/colors.js"></script>
      <script src="/assets/js/config/tour.js"></script>
      {/* <script>
        Config.set("assets", "../assets");
      </script> */}

      {/* Page */}
      <script src="/assets/js/Site.js"></script>
      <script src="/assets/js/Plugin/asscrollable.js"></script>
      <script src="/assets/js/Plugin/matchheight.js"></script>
      <script src="/assets/examples/js/dashboard/v1.js"></script>
      <script src="/assets/examples/js/charts/chartjs.js"></script>
    </div>

  )
}