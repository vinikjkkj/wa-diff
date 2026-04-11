__d(
  "WAWebBizBroadcastsFilePicker.react",
  [
    "WALogger",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebFilePicker.react",
    "WDSButton.react",
    "WDSIconIcUpload.react",
    "asyncToGeneratorRuntime",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = s.useRef;
    function d(t) {
      var a = t.acceptTypes,
        i = t.buttonText,
        l = t.entryPoint,
        s = t.onFileSelected,
        d = t.testid,
        m = c(null),
        p = function () {
          var e;
          (o(
            "WAWebBusinessBroadcastUserJourneyLogger",
          ).BusinessBroadcastUserJourneyLogger.fileUploadClicked(l),
            (e = m.current) == null || e.open());
        },
        _ = function (r) {
          var t = r.target.files[0];
          t &&
            n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              try {
                (o(
                  "WAWebBusinessBroadcastUserJourneyLogger",
                ).BusinessBroadcastUserJourneyLogger.fileOpenClicked(l),
                  yield s(t));
              } catch (t) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Error in onFileSelected: ",
                      "",
                    ])),
                  t,
                );
              }
            })();
        };
      return u.jsxs(u.Fragment, {
        children: [
          u.jsx(r("WDSButton.react"), {
            Icon: r("WDSIconIcUpload.react"),
            label: i,
            variant: "filled",
            onPress: p,
            testid: void 0,
          }),
          u.jsx(r("WAWebFilePicker.react"), {
            ref: m,
            mimes: a,
            onChange: _,
            multiple: !1,
          }),
        ],
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
