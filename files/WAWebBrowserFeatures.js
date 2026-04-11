__d(
  "WAWebBrowserFeatures",
  ["WAMd5", "WAPlatformEstimate"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return navigator.plugins.length;
    }
    function s() {
      var e, t;
      return (e = (t = navigator.mimeTypes) == null ? void 0 : t.length) != null
        ? e
        : 0;
    }
    function u() {
      return "Notification" in window && Notification.permission !== "denied";
    }
    function c() {
      return (
        "pdfViewerEnabled" in navigator && navigator.pdfViewerEnabled === !0
      );
    }
    function d() {
      var e, t;
      return (
        screen.height !== ((e = screen) == null ? void 0 : e.availHeight) ||
        screen.width !== ((t = screen) == null ? void 0 : t.availWidth)
      );
    }
    function m() {
      return "share" in navigator && "canShare" in navigator;
    }
    function p() {
      return "chrome" in window;
    }
    function _() {
      return window.history.length;
    }
    function f() {
      return window.innerWidth + "x" + window.innerHeight;
    }
    function g() {
      try {
        var e = document.createElement("canvas"),
          t = e.getContext("2d");
        return t == null
          ? ""
          : ((e.width = 120),
            (e.height = 20),
            (t.font = "14px 'Arial'"),
            (t.fillStyle = "#fff"),
            t.fillRect(0, 0, 120, 20),
            (t.fillStyle = "rgba(102, 204, 0, 0.7)"),
            t.fillText("whatsapp web", 2, 15),
            o("WAMd5").md5(e.toDataURL()));
      } catch (e) {
        return "";
      }
    }
    function h() {
      try {
        var e = [];
        return (
          Object.keys(document).some(function (e) {
            return /\$cdc_/.test(e);
          }) && e.push("cdc"),
          "__selenium_unwrapped" in document && e.push("selenium_unwrapped"),
          "__webdriver_evaluate" in document && e.push("webdriver_evaluate"),
          "__driver_evaluate" in document && e.push("driver_evaluate"),
          ("callPhantom" in window || "_phantom" in window) &&
            e.push("phantom"),
          "__nightmare" in window && e.push("nightmare"),
          ("domAutomation" in window || "domAutomationController" in window) &&
            e.push("dom_automation"),
          e.join(",")
        );
      } catch (e) {
        return "";
      }
    }
    function y() {
      try {
        var e;
        if (!("chrome" in window)) return "missing";
        var t =
          (e = Object.getOwnPropertyDescriptor(window, "chrome")) == null
            ? void 0
            : e.value;
        if (t == null || typeof t != "object") return "";
        var n = [];
        ("app" in t && n.push("app"),
          "runtime" in t && n.push("runtime"),
          "loadTimes" in t && n.push("loadTimes"),
          "csi" in t && n.push("csi"));
        try {
          var r,
            o =
              (r = Object.getOwnPropertyDescriptor(t, "app")) == null
                ? void 0
                : r.value;
          o != null &&
            typeof o == "object" &&
            o.isInstalled != null &&
            n.push("app.isInstalled");
        } catch (e) {}
        try {
          var a,
            i =
              (a = Object.getOwnPropertyDescriptor(t, "runtime")) == null
                ? void 0
                : a.value;
          i != null &&
            typeof i == "object" &&
            typeof i.connect == "function" &&
            n.push("runtime.connect");
        } catch (e) {}
        return n.join(",");
      } catch (e) {
        return "";
      }
    }
    function C() {
      return {
        pluginCount: e(),
        mimeTypeCount: s(),
        hasNotificationPermission: u(),
        isPDFViewerEnabled: c(),
        hasTaskbar: d(),
        hasWebShare: m(),
        hasChrome: p(),
        platformEstimate: r("WAPlatformEstimate")(),
        historyLength: _(),
        viewPortSize: f(),
        canvasFingerprint: g(),
        automationSignals: h(),
        chromeStructure: y(),
      };
    }
    l.default = C;
  },
  98,
);
