__d(
  "WAWebTextStatusBridgeApi",
  [
    "WALogger",
    "WAWebStatusContactAction",
    "WAWebTextStatusCollection",
    "WAWebUserPrefsMeUser",
    "WAWebWidFactory",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = {
        setMyStatus: function (t) {
          var e = t.status,
            n = o("WAWebUserPrefsMeUser").getMeDevicePnOrThrow_DO_NOT_USE();
          o("WAWebTextStatusCollection").TextStatusCollection.assertGet(
            o("WAWebWidFactory").asUserWidOrThrow(n),
          ).status =
            e != null
              ? e
              : o("WAWebTextStatusCollection").getDefaultTextStatus();
        },
        refreshTextStatus: (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            var t = e.contactId,
              n = o("WAWebWidFactory").createWid(t),
              r = o("WAWebTextStatusCollection").TextStatusCollection.get(n);
            if (r != null) {
              var a = yield o("WAWebStatusContactAction").getStatus(
                o("WAWebWidFactory").asUserWidOrThrow(n),
              );
              r.set({ status: a.status });
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })(),
        updateTextStatuses: function (n) {
          var t = n.content,
            r = n.ids;
          for (var a of r) {
            var i = o("WAWebWidFactory").createWid(a),
              l = o("WAWebTextStatusCollection").TextStatusCollection.get(i);
            l
              ? (l.status = t)
              : o("WALogger").WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "handleAboutNotification: unknown contact ",
                      "",
                    ])),
                  i.toLogString(),
                );
          }
        },
      };
    l.TextStatusBridgeApi = s;
  },
  98,
);
