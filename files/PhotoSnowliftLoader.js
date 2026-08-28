__d(
  "PhotoSnowliftLoader",
  [
    "Arbiter",
    "Bootloader",
    "PageEvents",
    "ThisControllerNoLongerExists",
    "getSurfaceAwareContainer",
    "ifRequired",
    "snowliftLoadingSpinner",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n) {
      return e && e.offer_bypass_snowlift === "1"
        ? (h(n),
          r("Bootloader").loadModules(
            ["AsyncRequest"],
            function (e) {
              new e().setURI(t).send();
            },
            "PhotoSnowliftLoader",
          ),
          !0)
        : !1;
    }
    function s(e, t, n) {
      return e && e.offerx_bypass_snowlift === "1"
        ? (h(n),
          r("Bootloader").loadModules(
            ["AsyncRequest"],
            function (e) {
              var t = o("ThisControllerNoLongerExists")
                .__DEADROUTEBUILDER__("q7m4xz9tb")
                .buildUri({});
              new e().setURI(t).send();
            },
            "PhotoSnowliftLoader",
          ),
          !0)
        : !1;
    }
    var u = function () {};
    (r("Arbiter").subscribe("PhotoSnowlift.OPEN", function () {
      u();
    }),
      r("Arbiter").subscribe("SalesPromoDetails.OPEN", function () {
        u();
      }),
      r("Arbiter").subscribe("OfferDetails.OPEN", function () {
        u();
      }));
    var c = !1,
      d = "",
      m = { x: 960, y: 960 },
      p = 360,
      _ = { x: 82, y: 42 };
    function f(e, t, n) {
      r("Bootloader").loadModules(
        ["URI"],
        function (o) {
          ((d = ""), u(), (u = r("snowliftLoadingSpinner")(t)));
          var a = !0,
            i = String(o.getMostRecentURI().getQueryData().viewas),
            l = new o(e).getQueryData();
          if (((a = y(l, e, t, i)), a)) {
            var s;
            (t.getAttribute("data-ploi") &&
              ((s = new Image()), (s.src = new o(C(t)))),
              g(e, t, i, n));
          }
        },
        "PhotoSnowliftLoader",
      );
    }
    function g(e, t, n, o) {
      (h(n),
        r("Bootloader").loadModules(
          ["PhotoTagApproval", "PhotoTagger", "PhotoTags", "TagTokenizer"],
          function () {},
          "PhotoSnowliftLoader",
        ),
        r("Bootloader").loadModules(
          ["PhotoSnowlift"],
          function (n) {
            n.bootstrap(e, t);
          },
          o,
        ));
    }
    var h = function (t) {
      if (!c) {
        c = !0;
        var e = t ? { viewas: t } : {};
      }
    };
    function y(t, n, r, o) {
      var a = e(t, n, o),
        i = s(t, n, o);
      return !a && !i;
    }
    function C(e) {
      return (
        d === "" &&
          r("ifRequired")("URI", function (t) {
            var n = e.getAttribute("data-ploi"),
              r = e.getAttribute("data-plsi"),
              o = new t(e.getAttribute("ajaxify"))
                .getQueryData()
                .size.split(",");
            r && !b({ hasSmallImage: !!r, dimensions: { x: o[0], y: o[1] } })
              ? (d = r)
              : n
                ? (d = n)
                : (d = "");
          }),
        d
      );
    }
    function b(e) {
      return (
        r("ifRequired")("Vector", function (t) {
          if (!e.hasSmallImage) return !1;
          var n = v(e.dimensions);
          if (n) {
            n = S(n);
            var r = R(e.dimensions, n);
            if (r) return r.x > m.x || r.y > m.y;
          }
          return !1;
        }),
        !1
      );
    }
    function v(e) {
      r("ifRequired")("Vector", function (t) {
        var n = t.getViewportDimensions(),
          r = new t(e.x, e.y),
          o,
          a;
        o = Math.min(r.x, n.x - p - _.x);
        var i = n.y - _.y;
        if (((a = Math.min(r.y, i)), o === 0 && a === 0)) return new t(0, 0);
        var l = o / a,
          s = r.x / r.y;
        return l < s
          ? new t(o, Math.round(o / s))
          : new t(Math.round(a * s), a);
      });
    }
    function S(e) {
      return (
        r("ifRequired")("Vector", function (t) {
          window.devicePixelRatio &&
            window.devicePixelRatio > 1 &&
            (e = new t(
              e.x * window.devicePixelRatio,
              e.y * window.devicePixelRatio,
            ));
        }),
        e
      );
    }
    function R(e, t) {
      r("ifRequired")("Vector", function (n) {
        var r = e.x,
          o = e.y;
        if (r >= t.x || o >= t.y) {
          var a = t.x / t.y,
            i = r / o;
          a < i
            ? ((r = t.x), (o = Math.round(r / i)))
            : a > i
              ? ((o = t.y), (r = Math.round(o * i)))
              : ((r = t.x), (o = t.y));
        }
        return new n(r, o);
      });
    }
    var L = function () {
      r("Arbiter").subscribe(r("PageEvents").BIGPIPE_ONLOAD, function () {
        var e = r("getSurfaceAwareContainer")();
        ((e && e.classList.contains("home")) ||
          (e && e.classList.contains("timelineLayout"))) &&
          r("ifRequired")(
            "requestIdleCallback",
            function (e) {
              e(function () {
                h();
              });
            },
            function () {
              h();
            },
          );
      });
    };
    ((l.STAGE_NORMAL_MAX = m),
      (l.SIDEBAR_SIZE_MAX = p),
      (l.STAGE_CHROME = _),
      (l.load = f),
      (l.loadWithSnowLift = g),
      (l.loadFrame = h),
      (l.shouldUseSnowlift = y),
      (l.getImageURL = C),
      (l.shouldShowHiRes = b),
      (l.getStageSize = v),
      (l.adjustStageSizeForPixelRatio = S),
      (l.getImageSizeInStage = R),
      (l.preload = L));
  },
  98,
);
