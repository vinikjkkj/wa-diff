__d(
  "WAWebLinkDevicePhoneNumber.react",
  [
    "fbt",
    "$InternalEnum",
    "WALogger",
    "WANullthrows",
    "WAWebAltDeviceLinkingIq",
    "WAWebAltDeviceLinkingQpl",
    "WAWebLinkDeviceAction",
    "WAWebLinkDeviceEvents",
    "WAWebLinkDevicePhoneNumberCodeScreen.react",
    "WAWebLinkDevicePhoneNumberEntryScreen.react",
    "WAWebModalSingleActionOpener",
    "WAWebNetworkStatus",
    "WAWebPairingType",
    "asyncToGeneratorRuntime",
    "cr:1064",
    "react",
    "useWAWebListener",
    "useWAWebStableCallback",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c,
      d,
      m = d || (d = o("react")),
      p = d,
      _ = p.useEffect,
      f = p.useState,
      g = n("$InternalEnum").Mirrored([
        "STEP1_PHONE_NUMBER_ENTRY",
        "STEP2_DISPLAY_CODE",
      ]);
    function h(t) {
      var a = f(g.STEP1_PHONE_NUMBER_ENTRY),
        i = a[0],
        l = a[1],
        d = f(null),
        p = d[0],
        h = d[1],
        y = f(null),
        C = y[0],
        b = y[1],
        v = f(!1),
        S = v[0],
        R = v[1],
        L = function () {
          return o("WAWebModalSingleActionOpener").openSingleActionModal({
            title: s._(/*BTDS*/ "Something went wrong"),
            body: s._(/*BTDS*/ "Please try again or link with the QR code."),
            onDismiss: function () {
              l(g.STEP1_PHONE_NUMBER_ENTRY);
            },
          });
        },
        E = function () {
          return o("WAWebModalSingleActionOpener").openSingleActionModal({
            title: s._(/*BTDS*/ "Limited availability"),
            body: s._(
              /*BTDS*/ "This feature is not available to you yet. It's coming soon. Link with QR code instead.",
            ),
            buttonText: s._(/*BTDS*/ "Link with QR code"),
            onDismiss: function () {
              return t.onClickLinkWithQr();
            },
          });
        },
        k = function () {
          return o("WAWebModalSingleActionOpener").openSingleActionModal({
            title: s._(/*BTDS*/ "Too many attempts"),
            body: s._(
              /*BTDS*/ "There were too many attempts to link a device. Please try again later.",
            ),
            onDismiss: function () {
              return t.onClickLinkWithQr();
            },
          });
        },
        I = r("useWAWebStableCallback")(
          (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, n) {
                (h(t), R(!1), l(g.STEP2_DISPLAY_CODE));
                try {
                  if (r("WAWebNetworkStatus").online) {
                    var a = yield o(
                      "WAWebLinkDeviceAction",
                    ).genLinkDeviceCodeForPhoneNumber(t, n);
                    b(a);
                  }
                } catch (t) {
                  if (
                    (o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
                      "gen_code_exception",
                    ),
                    yield o("WAWebLinkDeviceAction").resetLinkDeviceState({
                      linkDeviceMethod:
                        o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING,
                    }),
                    t instanceof
                      o("WAWebAltDeviceLinkingIq").CompanionHelloError)
                  ) {
                    var i;
                    switch (
                      (o("WALogger").WARN(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "[alt pairing] companion-hello err starting flow: ",
                            "",
                          ])),
                        t,
                      ),
                      (i = t.type) == null ? void 0 : i.name)
                    ) {
                      case "IQErrorFeatureNotAvailable":
                        (l(g.STEP1_PHONE_NUMBER_ENTRY), E());
                        return;
                      case "IQErrorRateOverlimit":
                        (l(g.STEP1_PHONE_NUMBER_ENTRY), k());
                        return;
                    }
                  }
                  (o("WALogger")
                    .ERROR(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "alt pairing: unexpected error happened while starting flow: ",
                          "",
                        ])),
                      t,
                    )
                    .sendLogs(
                      "alt pairing: unexpected error happened while starting flow",
                    ),
                    L());
                }
              },
            );
            return function (e, n) {
              return t.apply(this, arguments);
            };
          })(),
        ),
        T = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            i !== g.STEP2_DISPLAY_CODE ||
              p == null ||
              (b(null),
              o("WAWebAltDeviceLinkingQpl").addPointToCurrentMarker(
                "refresh_code",
              ),
              yield o("WAWebLinkDeviceAction").resetLinkDeviceState({
                linkDeviceMethod:
                  o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING,
              }),
              yield I(p, !1));
          });
          return function () {
            return e.apply(this, arguments);
          };
        })();
      switch (
        (o("useWAWebListener").useListener(
          o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents,
          "link_device_events:refresh_alt_linking_code",
          T,
        ),
        o("useWAWebListener").useListener(
          r("WAWebNetworkStatus"),
          "change:online",
          function () {
            r("WAWebNetworkStatus").online ? T() : b(null);
          },
        ),
        o("useWAWebListener").useListener(
          o("WAWebLinkDeviceEvents").WAWebLinkDeviceEvents,
          "link_device_events:error_alt_linking",
          L,
        ),
        _(function () {
          n("cr:1064") == null || n("cr:1064").initialize();
        }, []),
        p == null &&
          i !== g.STEP1_PHONE_NUMBER_ENTRY &&
          (o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[alt pairing] invalid state: null phone in code screen",
                ])),
            )
            .sendLogs("alt pairing: null phone in code screen"),
          l(g.STEP1_PHONE_NUMBER_ENTRY)),
        i)
      ) {
        case g.STEP1_PHONE_NUMBER_ENTRY:
          return m.jsx(
            o("WAWebLinkDevicePhoneNumberEntryScreen.react")
              .LinkWithPhoneNumberEntryScreen,
            babelHelpers.extends(
              {
                initialPhoneNumber: p,
                showUpdatePrimaryAppBanner: S,
                onSubmitPhoneNumber: function (t) {
                  return I(t, !0);
                },
              },
              t,
            ),
          );
        case g.STEP2_DISPLAY_CODE:
          return m.jsx(r("WAWebLinkDevicePhoneNumberCodeScreen.react"), {
            code: C,
            phoneNumber: r("WANullthrows")(p),
            onClickEditPhoneNumber: n(
              "asyncToGeneratorRuntime",
            ).asyncToGenerator(function* () {
              (yield o("WAWebLinkDeviceAction").resetLinkDeviceState({
                linkDeviceMethod:
                  o("WAWebPairingType").PairingType.ALT_DEVICE_LINKING,
              }),
                l(g.STEP1_PHONE_NUMBER_ENTRY),
                b(null));
            }),
            onClickLinkWithQr: t.onClickLinkWithQr,
            apiCmd: t.apiCmd,
          });
      }
    }
    ((h.displayName = h.name + " [from " + i.id + "]"), (l.default = h));
  },
  226,
);
