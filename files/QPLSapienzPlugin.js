__d(
  "QPLSapienzPlugin",
  ["QPLEvent", "QuickLogActionType", "QuickLogEvents"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      return (e || (e = o("QPLEvent"))).getMarkerId(t) + "/" + n;
    }
    function u(t) {
      var n = (e || (e = o("QPLEvent"))).getMarkerId(t),
        a = r("QuickLogEvents")[n];
      return a == null ? n.toString() : a.moduleName + "/" + a.name;
    }
    function c(e) {
      var t = Object.keys(r("QuickLogActionType")).find(function (t) {
        return r("QuickLogActionType")[t] === e;
      });
      return t != null ? t : e.toString();
    }
    function d(e) {
      var t = e
        ? babelHelpers.extends(
            {},
            e.annotations,
            e.annotations_int,
            e.annotations_double,
            e.annotations_bool,
            e.annotations_string_array,
            e.annotations_int_array,
            e.annotations_double_array,
            e.annotations_bool_array,
          )
        : {};
      return t;
    }
    function m(e) {
      return e ? babelHelpers.extends({}, e.metadata) : {};
    }
    function p(e, t, n, r) {
      var o = window.__sapienzPublishQplCallback__;
      o &&
        o({
          id: s(t, n),
          name: u(t),
          action: c(e),
          annotations: d(r.logData),
          metadata: m(r.logData),
          duration: r.durationMs,
        });
    }
    function _() {
      return {
        onMarkerEnd: function (t, n, r, o, a) {
          p(t, n, r, a);
        },
      };
    }
    var f = { getQplSapienzListener: _ };
    l.default = f;
  },
  98,
);
