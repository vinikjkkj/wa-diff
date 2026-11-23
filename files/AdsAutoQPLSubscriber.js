__d(
  "AdsAutoQPLSubscriber",
  [
    "AdsManagerQPLUserFlowLogger",
    "CometSSRInitData",
    "FBLogger",
    "OmniVue",
    "QPLUserFlow",
    "QuickPerformanceLogger",
    "clearTimeout",
    "getErrorSafe",
    "qpl",
    "setTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("qpl")._(440808414, "1381"),
      u = 6e5,
      c = /\/(?:automation|adscreativestudio)\/([^/?#]+)/,
      d = !1;
    function m() {
      var e = o("CometSSRInitData").getSSRInitData();
      return e == null ? "absent" : e.enabled ? "on" : "off";
    }
    function p(e, t, n, r, a) {
      var i = {
          ad_account_id: n != null ? n : "",
          entry_point: e == null ? "" : String(e),
          media_format: t != null ? t : "",
          session_id: r,
          flow_kind: "session",
          ssr: m(),
        },
        l = a == null ? void 0 : a.tip_name;
      l != null && l !== "" && (i.tip_name = l);
      var c = a == null ? void 0 : a.channel;
      (c != null && c !== "" && (i.channel = c),
        o("AdsManagerQPLUserFlowLogger").start(s, {
          timeoutInMs: u,
          annotations: { string: i },
        }),
        (d = !0));
    }
    function _() {
      (r("QPLUserFlow").endCancel(s), (d = !1));
    }
    function f() {
      return d;
    }
    function g() {
      return (e || (e = r("QuickPerformanceLogger"))).currentTimestamp();
    }
    var h = "";
    function y(e) {
      var t, n;
      h =
        (t = e == null || (n = e.match(c)) == null ? void 0 : n[1]) != null
          ? t
          : "";
    }
    function C(e) {
      return babelHelpers.extends({}, e, {
        string: babelHelpers.extends({}, e == null ? void 0 : e.string, {
          url_stub: h,
        }),
      });
    }
    function b(e, t, n) {
      var o = C(t);
      n != null
        ? r("QPLUserFlow").addPoint(s, e, { data: o, timestamp: n })
        : r("QPLUserFlow").addPoint(s, e, { data: o });
    }
    var v = 1,
      S = new Set();
    function R(e) {
      try {
        e();
      } catch (e) {
        r("FBLogger")("ads_automation2")
          .catching(r("getErrorSafe")(e))
          .warn("Operation QPL logging failed");
      }
    }
    function L(e, t, n, a) {
      for (a === void 0 && (a = u); S.has(v); )
        v = v === 2147483647 ? 1 : v + 1;
      var i = v;
      ((v = i === 2147483647 ? 1 : i + 1), S.add(i));
      var l = babelHelpers.extends({}, t, {
          flow_kind: "operation",
          operation_name: e,
          url_stub: h,
        }),
        c = !0,
        d = null,
        m = function (t, o) {
          if ((o === void 0 && (o = {}), !c)) return !1;
          ((c = !1), r("clearTimeout")(d), S.delete(i));
          var e = { string: babelHelpers.extends({}, o, l, { outcome: t }) };
          return (
            R(function () {
              var n = { instanceKey: i, annotations: e };
              switch (t) {
                case "success":
                  r("QPLUserFlow").endSuccess(s, n);
                  break;
                case "fail":
                  r("QPLUserFlow").endFailure(s, "operation_failed", n);
                  break;
                case "cancel":
                  r("QPLUserFlow").endCancel(s, n);
                  break;
                case "timeout":
                  r("QPLUserFlow").endTimeout(s, n);
                  break;
              }
            }),
            n(),
            !0
          );
        };
      return (
        a != null &&
          (d = r("setTimeout")(function () {
            return m("timeout", { terminal_reason: "timeout" });
          }, a)),
        R(function () {
          (o("AdsManagerQPLUserFlowLogger").start(
            s,
            babelHelpers.extends(
              { instanceKey: i },
              a == null ? {} : { timeoutInMs: a },
              { cancelOnUnload: !1, annotations: { string: l } },
            ),
          ),
            r("QPLUserFlow").addPoint(s, e + "_start", {
              instanceKey: i,
              data: { string: l },
            }));
        }),
        {
          addPoint: function (t, n) {
            c &&
              R(function () {
                return r("QPLUserFlow").addPoint(s, t, {
                  instanceKey: i,
                  data: babelHelpers.extends({}, n, {
                    string: babelHelpers.extends(
                      {},
                      n == null ? void 0 : n.string,
                      l,
                    ),
                  }),
                });
              });
          },
          end: m,
        }
      );
    }
    function E() {
      return o("OmniVue").subscribe(function (e) {
        var t = e.payload,
          n = t.data;
        switch (n.type) {
          case "click": {
            var r = n.action_meta,
              o = { target_tag: n.target_tag, surface: t.surface };
            for (var a of Object.keys(r))
              if (a !== "cta") {
                var i = r[a];
                o[a] = i === !0 ? "true" : i;
              }
            var l = r.cta,
              s =
                typeof l == "string" && l !== ""
                  ? l.toUpperCase() + "_CLICK"
                  : "OMNIVUE_CLICK";
            b(s, { string: o });
            break;
          }
          case "url_change":
            (y(n.path),
              b("URL_CHANGE", {
                string: { path: n.path, section: n.section },
              }));
            break;
          case "visibility_change":
            b("VISIBILITY_CHANGE", { string: { hidden: String(n.hidden) } });
            break;
          default:
            break;
        }
      });
    }
    ((l.addPoint = b),
      (l.attachQPLSubscriber = E),
      (l.currentTimestamp = g),
      (l.endSessionCancel = _),
      (l.isSessionActive = f),
      (l.startSession = p),
      (l.startOperation = L));
  },
  98,
);
