__d(
  "WAWebBrowserFeatures",
  ["Promise", "WAMd5", "WAPlatformEstimate", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s() {
      return navigator.plugins.length;
    }
    function u() {
      var e, t;
      return (e = (t = navigator.mimeTypes) == null ? void 0 : t.length) != null
        ? e
        : 0;
    }
    function c() {
      return "Notification" in window && Notification.permission !== "denied";
    }
    function d() {
      return (
        "pdfViewerEnabled" in navigator && navigator.pdfViewerEnabled === !0
      );
    }
    function m() {
      var e, t;
      return (
        screen.height !== ((e = screen) == null ? void 0 : e.availHeight) ||
        screen.width !== ((t = screen) == null ? void 0 : t.availWidth)
      );
    }
    function p() {
      return "share" in navigator && "canShare" in navigator;
    }
    function _() {
      return "chrome" in window;
    }
    function f() {
      return window.history.length;
    }
    function g() {
      return window.innerWidth + "x" + window.innerHeight;
    }
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = document.createElement("canvas"),
              r = t.getContext("2d");
            if (r == null) return "";
            ((t.width = 120),
              (t.height = 20),
              (r.font = "14px 'Arial'"),
              (r.fillStyle = "#fff"),
              r.fillRect(0, 0, 120, 20),
              (r.fillStyle = "rgba(102, 204, 0, 0.7)"),
              r.fillText("whatsapp web", 2, 15));
            var a = yield new (e || (e = n("Promise")))(function (e) {
              return t.toBlob(e);
            });
            if (a == null) return "";
            var i = yield new e(function (e, t) {
              var n = new FileReader();
              ((n.onloadend = function () {
                var t = n.result;
                e(typeof t == "string" ? t : "");
              }),
                (n.onerror = t),
                n.readAsDataURL(a));
            });
            return i !== "" ? o("WAMd5").md5(i) : "";
          } catch (e) {
            return "";
          }
        })),
        y.apply(this, arguments)
      );
    }
    function C() {
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
    function b() {
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
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield h();
          return {
            pluginCount: s(),
            mimeTypeCount: u(),
            hasNotificationPermission: c(),
            isPDFViewerEnabled: d(),
            hasTaskbar: m(),
            hasWebShare: p(),
            hasChrome: _(),
            platformEstimate: r("WAPlatformEstimate")(),
            historyLength: f(),
            viewPortSize: g(),
            canvasFingerprint: e,
            automationSignals: C(),
            chromeStructure: b(),
          };
        })),
        S.apply(this, arguments)
      );
    }
    l.default = v;
  },
  98,
);
