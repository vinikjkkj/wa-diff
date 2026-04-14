__d(
  "WAWebUsePasswordDialog",
  ["react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = s.useEffect,
      c = s.useState;
    function d(e, t, n) {
      var r = c({ isVisible: !1, error: null, isSubmitting: !1 }),
        o = r[0],
        a = r[1];
      u(
        function () {
          if (e) {
            var r = e.listen("SHOW_PASSWORD_DIALOG", function () {
                (a({ isVisible: !0, error: null, isSubmitting: !1 }), t());
              }),
              o = e.listen("SUBMIT_PASSWORD_RESPONSE", function (e) {
                if (e.status === "SUCCESS")
                  a({ isVisible: !1, error: null, isSubmitting: !1 });
                else {
                  var t;
                  a({
                    isVisible: !0,
                    error: (t = e.error) != null ? t : "Incorrect password",
                    isSubmitting: !1,
                  });
                }
              }),
              i = e.listen("HIDE_PASSWORD_DIALOG", function () {
                (a({ isVisible: !1, error: null, isSubmitting: !1 }), n());
              });
            return function () {
              (r(), o(), i());
            };
          }
        },
        [e, t, n],
      );
      var i = function (n) {
        e &&
          (a(function (e) {
            return babelHelpers.extends({}, e, { isSubmitting: !0 });
          }),
          e.publish("SUBMIT_PASSWORD", { password: n }));
      };
      return { state: o, submitPassword: i };
    }
    l.usePasswordDialog = d;
  },
  98,
);
