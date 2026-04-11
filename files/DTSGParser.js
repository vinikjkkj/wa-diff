__d(
  "DTSGParser",
  ["CSRFGuard", "cr:8959", "cr:8960"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        updateFromAsyncResponse: function (t) {
          if (o("CSRFGuard").exists(t))
            try {
              var e = o("CSRFGuard").clean(t),
                r = JSON.parse(e),
                a = r.dtsgToken,
                i = r.dtsgAsyncGetToken;
              (a && n("cr:8959").setToken(a), i && n("cr:8960").setToken(i));
            } catch (e) {
              return;
            }
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
