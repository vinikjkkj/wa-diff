__d(
  "WebBloksURLUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t) {
      var n = new RegExp(
          "[?&]" + t.join("(?:=[^&]*)?|[?&]") + "(?:=[^&]*)?",
          "gi",
        ),
        r = e.indexOf("?") !== -1 ? "&" : "?",
        o = e.replace(n, "").replace(/&$/, "");
      return o.indexOf("?") === -1 && o.indexOf("&") !== -1
        ? o.replace("&", "?")
        : o.replace("?&", r);
    }
    function l(e) {
      if (/^(fb|https?|intent):\/\//i.test(e) || /^mailto:/i.test(e)) return e;
      var t = window.location.protocol + "//" + window.location.hostname,
        n = e;
      return (e.charAt(0) === "/" && (n = e.substr(1)), t + "/" + n);
    }
    function s(e, t) {
      t === void 0 && (t = !1);
      var n = window.location.href;
      t
        ? window.open(e, "_blank")
        : e === n
          ? window.location.reload()
          : (window.location.href = e);
    }
    function u(e, t) {
      var n = e.split("?")[0],
        r = e.split("?")[1] || "",
        o = c(r),
        a = babelHelpers.extends({}, o, t),
        i = Object.entries(a)
          .map(function (e) {
            var t = e[0],
              n = e[1];
            return typeof n == "string" && n.length === 0
              ? t
              : encodeURIComponent(t) + "=" + encodeURIComponent(n);
          })
          .join("&");
      return n + "?" + i;
    }
    function c(e) {
      var t = {};
      return (
        e &&
          e.split("&").forEach(function (e) {
            var n = e.split("="),
              r = n[0],
              o = n[1];
            t[decodeURIComponent(r)] = decodeURIComponent(
              o === void 0 ? "" : o,
            );
          }),
        t
      );
    }
    ((i.removeQueryParams = e),
      (i.qualify = l),
      (i.openURL = s),
      (i.addQueryParamsToUrl = u));
  },
  66,
);
