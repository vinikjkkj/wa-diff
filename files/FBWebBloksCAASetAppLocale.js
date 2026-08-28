__d(
  "FBWebBloksCAASetAppLocale",
  ["URI", "XAsyncRequest", "XIntlAccountSetLocaleControllerRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n) {
      var o = r("XIntlAccountSetLocaleControllerRouteBuilder").buildUri({
        loc: n,
        href: window.location.href.replace(/#$/, ""),
        ls_ref: "mobile_suggested_locale_selector",
        is_caa: !0,
      });
      new (r("XAsyncRequest"))(new (e || (e = r("URI")))(o)).send();
    }
    l.default = s;
  },
  98,
);
