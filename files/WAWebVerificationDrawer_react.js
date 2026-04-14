__d(
  "WAWebVerificationDrawer.react",
  [
    "fbt",
    "WAByteArray",
    "WAFilteredCatch",
    "WAGetUserMedia",
    "WANullthrows",
    "WAValidateFingerprints",
    "WAWebABProps",
    "WAWebAvatarOverlay.react",
    "WAWebBizCoexGatingUtils",
    "WAWebButton.react",
    "WAWebContactCollection",
    "WAWebContactGetters",
    "WAWebDownloadableLink.react",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebE2EChangeModal.react",
    "WAWebEmojiText.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFileSaverTypes",
    "WAWebFrontendConstants",
    "WAWebFrontendContactGetters",
    "WAWebGuidePopup.react",
    "WAWebIdentityVerificationJob",
    "WAWebLid1X1MigrationGating",
    "WAWebMediaCapture",
    "WAWebMediaCaptureStreamType",
    "WAWebMiscErrors",
    "WAWebMobilePlatforms",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebQRCode.react",
    "WAWebSendMsgToVerifyIdentityPopup.react",
    "WAWebSpinner.react",
    "WAWebStopEvent",
    "WAWebText.react",
    "WAWebUserPrefsMeUser",
    "WAWebUserPrefsMultiDevice",
    "WAWebUsernameGatingUtils",
    "WAWebVerificationNumericCode.react",
    "WAWebVideo.react",
    "WAWebWidFactory",
    "WAWebXAltIcon.react",
    "jsqr",
    "react",
    "useWAWebContactValues",
    "useWAWebInterval",
    "useWAWebListener",
    "useWAWebTimeout",
    "useWAWebUIM",
    "useWAWebUnmountSignal",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useCallback,
      p = d.useEffect,
      _ = d.useRef,
      f = d.useState,
      g = "x15aousm-B",
      h = "x1ndnnjd-B",
      y = "x1bhqxhk-B",
      C = {
        circle: {
          width: "xygnafs",
          height: "x1wkxgih",
          paddingTop: "x14a8spa",
          paddingInlineEnd: "x1t7qo4d",
          paddingBottom: "x1c76a8b",
          paddingInlineStart: "xu7uy1i",
          $$css: !0,
        },
        noWrap: {
          display: "x78zum5",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          whiteSpace: "xuxw1ft",
          $$css: !0,
        },
      },
      b = 10,
      v = b / 2;
    function S(e) {
      var t = e.binary,
        n = e.contact,
        a = f(!1),
        i = a[0],
        l = a[1],
        u = f(null),
        d = u[0],
        p = u[1],
        _ = m(
          function (e) {
            var t = e == null ? void 0 : e.getElementsByTagName("canvas")[0];
            if (!t) {
              p(null);
              return;
            }
            var n = document.createElement("canvas");
            ((n.width = t.width + b), (n.height = t.height + b));
            var r = n.getContext("2d");
            ((r.fillStyle = "white"),
              r.fillRect(0, 0, n.width, n.height),
              r.drawImage(t, v, v),
              n.toBlob(p, "image/png"));
          },
          [p],
        ),
        g = o("WAWebUserPrefsMeUser").getMeUser(),
        h = null;
      if (i && d) {
        var y = o("WAWebFrontendContactGetters").getFormattedUser(n),
          S = o("WAWebFrontendContactGetters").getFormattedUser(
            o("WAWebContactCollection").ContactCollection.assertGet(g),
          ),
          R = "Verification Code between " + S + " and " + y;
        h = c.jsx(r("WAWebDownloadableLink.react"), {
          file: d,
          download: R,
          extension: o("WAWebFileSaverTypes").AllowedFileExtensions.PNG,
          children: c.jsx(o("WAWebAvatarOverlay.react").AvatarOverlay, {
            text: s._(/*BTDS*/ "Download code"),
          }),
        });
      }
      return c.jsxs("div", {
        onMouseEnter: function () {
          return l(!0);
        },
        onMouseLeave: function () {
          return l(!1);
        },
        children: [
          h,
          c.jsx(r("WAWebQRCode.react"), {
            data: t,
            size: o("WAWebFrontendConstants").QR_EDGE / 2,
            onChange: _,
            xstyle: C.circle,
          }),
        ],
      });
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R() {
      return c.jsx("div", {
        className: "xygnafs x1wkxgih x14a8spa x1t7qo4d x1c76a8b xu7uy1i",
        children: c.jsx("div", {
          className: "x14a8spa x1t7qo4d xu7uy1i x1ej9moc",
          children: c.jsx(o("WAWebSpinner.react").Spinner, {
            size: 52,
            stroke: 4,
          }),
        }),
      });
    }
    R.displayName = R.name + " [from " + i.id + "]";
    function L(e) {
      var t = e.binary,
        n = e.contact;
      return c.jsx("div", {
        className:
          "x1n2onr6 x1y5idc5 xs3hcls xr1yuqi x11t971q x4ii5y1 xvc5jky x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1jpgh95 x9kwlzf x7v9bd0 x1alahoq x1hqk2wv",
        children: t ? c.jsx(S, { binary: t, contact: n }) : c.jsx(R, {}),
      });
    }
    L.displayName = L.name + " [from " + i.id + "]";
    function E() {
      return c.jsx("div", {
        className:
          "x1n2onr6 x1y5idc5 xs3hcls xr1yuqi x11t971q x4ii5y1 xvc5jky x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1jpgh95 x9kwlzf x7v9bd0 x1alahoq xfn3atn",
        children: c.jsx("div", {
          className: "x1n2onr6 xwa60dl x1svysek x17t9dm2 x2b8uid x1cb1t30",
          children: "\u2713 ",
        }),
      });
    }
    E.displayName = E.name + " [from " + i.id + "]";
    function k() {
      return c.jsx("div", {
        className:
          "x1n2onr6 x1y5idc5 xs3hcls xr1yuqi x11t971q x4ii5y1 xvc5jky x6ikm8r x10wlt62 x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1jpgh95 x9kwlzf x7v9bd0 x1alahoq x1o43s8z",
        children: c.jsx("div", {
          className: "x1n2onr6 xwa60dl x1svysek x17t9dm2 x2b8uid x1cb1t30",
          children: "!",
        }),
      });
    }
    k.displayName = k.name + " [from " + i.id + "]";
    function I(e) {
      var t = e.children;
      return c.jsx("div", {
        className:
          "x10l6tqk xef1mmm x1oy9qf3 x9f619 xh8yej3 x889kno x2vl965 x1a8lsjc xe2zdcy x1djn5p2 x1d3mw78 x17t9dm2 x2b8uid x1kncwe2",
        children: t,
      });
    }
    I.displayName = I.name + " [from " + i.id + "]";
    function T(e) {
      var t = e.binary,
        n = e.contact,
        r = e.state;
      switch (r) {
        case "qr":
          return c.jsx(L, { binary: t, contact: n });
        case "checkmark":
          return c.jsx(E, {});
        default:
          return c.jsx(k, {});
      }
    }
    T.displayName = T.name + " [from " + i.id + "]";
    var D = 200;
    function x(e) {
      var t = e.disposeStream,
        n = e.onCapture,
        a = e.stream,
        i = _(null),
        l = _(!1),
        s = _(null),
        u = _(null),
        d = function () {
          var e = s.current;
          if (e != null) {
            var t = e.getVideoDimensions();
            if (t != null) {
              var r = document.createElement("canvas");
              ((r.width = t.width / 2), (r.height = t.height / 2));
              var o = r.getContext("2d");
              if (o) {
                e.drawFrameToContext(
                  o,
                  r.width / 2,
                  r.height / 2,
                  r.width,
                  r.height,
                  0,
                  0,
                  r.width,
                  r.height,
                );
                var a = o.getImageData(0, 0, r.width, r.height);
                n(a);
              }
            }
          }
        },
        m = r("useWAWebInterval")(d, D),
        f = m[0];
      p(function () {
        return (
          o("WAWebMediaCapture").isSrcObjectInVideoElement() ||
            (i.current = window.URL.createObjectURL(a)),
          function () {
            a &&
              (t == null || t(),
              i.current != null && window.URL.revokeObjectURL(i.current));
          }
        );
      }, []);
      var g = function () {
          var e,
            t =
              (e = s.current) == null ? void 0 : e.getVideoElementDimensions(),
            n = u.current;
          if (!(!t || !n)) {
            var r = t.height,
              o = t.width,
              a = o / 3,
              i = a,
              l = (o - a) / 2,
              c = (r - i) / 2;
            ((n.style.width = a + "px"),
              (n.style.height = i + "px"),
              (n.style.margin = c + "px " + l + "px"));
          }
        },
        h = function () {
          l.current !== !0 && (g(), f());
        };
      o("useWAWebListener").useListener(window, "resize", g);
      var y = null;
      if (e.stream) {
        var C;
        y = c.jsxs("div", {
          className: "x1n2onr6 xh8yej3 xmgb6t1",
          children: [
            c.jsx("div", {
              className: "xpk2tj9 x1bndym7",
              children: c.jsx(r("WAWebVideo.react"), {
                autoPlay: !0,
                ref: s,
                onPlaying: h,
                src: (C = i.current) != null ? C : void 0,
                srcObject: i.current != null ? void 0 : e.stream,
                width: "100%",
              }),
            }),
            c.jsx("div", {
              className:
                "x10l6tqk x13vifvy x1c9tyrk xeusxvb x1pahc9y x1ertn4p x1vrjhu8",
              ref: u,
            }),
            c.jsx("button", {
              onClick: e.onClose,
              className: "x10l6tqk x1eu8d0j xo2ifbc xhslqc4",
              children: c.jsx(o("WAWebXAltIcon.react").XAltIcon, {}),
            }),
          ],
        });
      }
      return y;
    }
    x.displayName = x.name + " [from " + i.id + "]";
    var $ = 3e3,
      P = 5e3,
      N = 7e3,
      M = 1e3;
    function w(t) {
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.contact,
        l = a.isFirstLevel,
        u = l === void 0 ? !1 : l,
        d = a.lid,
        g = a.onClose,
        h = r("useWAWebUIM")(),
        y = r("useWAWebUnmountSignal")(),
        b = o("useWAWebContactValues").useContactValues(i.id, [
          o("WAWebFrontendContactGetters").getFormattedUser,
          o("WAWebFrontendContactGetters").getFormattedShortNameAndType,
          o("WAWebContactGetters").getIsMe,
          o("WAWebContactGetters").getId,
          o("WAWebContactGetters").getShowBusinessCheckmarkAsPrimary,
          o("WAWebFrontendContactGetters").getPhoneNumber,
          o("WAWebFrontendContactGetters").getShareOwnPn,
          o("WAWebFrontendContactGetters").getPnForLid,
          o("WAWebContactGetters").getIsHosted,
        ]),
        v = b[0],
        S = b[1],
        R = b[2],
        L = b[3],
        E = b[4],
        k = b[5],
        D = b[6],
        w = b[7],
        O = b[8],
        B = _(null),
        W = _(null),
        q = _(null),
        U = f("qr"),
        V = U[0],
        H = U[1],
        G = f(null),
        z = G[0],
        j = G[1],
        K = f(null),
        Q = K[0],
        X = K[1],
        Y = f(!1),
        J = Y[0],
        Z = Y[1],
        ee = f(null),
        te = ee[0],
        ne = ee[1],
        re = f(null),
        oe = re[0],
        ae = re[1],
        ie = f(o("WAWebUsernameGatingUtils").shouldDefaultToV4NumericCode()),
        le = ie[0],
        se = ie[1],
        ue = f(null),
        ce = ue[0],
        de = ue[1],
        me = f(null),
        pe = me[0],
        _e = me[1],
        fe = function () {
          o("WAWebModalManager").ModalManager.open(
            c.jsx(r("WAWebSendMsgToVerifyIdentityPopup.react"), {
              name: v,
              onOK: function () {
                g ? g() : h == null || h.requestDismiss();
              },
            }),
          );
        },
        ge = function () {
          var e = {
            jid: o("WAWebWidFactory").asUserWidOrThrow(L),
            options: {
              shareOwnPn:
                D || !L.isLid() || o("WAWebUserPrefsMeUser").isMeAccount(L),
            },
          };
          (o(
            "WAWebLid1X1MigrationGating",
          ).Lid1X1MigrationUtils.isLidMigrated() && (e.lid = d),
            o("WAWebIdentityVerificationJob")
              .getIdentityVerificationDataJob(e)
              .then(function (e) {
                y.aborted ||
                  (e
                    ? ((!o("WAByteArray").compareArrayBuffer(
                        te,
                        e.qrCodeDisplay,
                      ) ||
                        !o("WAByteArray").compareArrayBuffer(
                          oe,
                          e.qrCodeVerify,
                        ) ||
                        ce !== e.numericCodeV3 ||
                        pe !== e.numericCodeV4) &&
                        (te != null &&
                          o("WAWebModalManager").ModalManager.open(
                            c.jsx(r("WAWebE2EChangeModal.react"), {
                              contact: i,
                            }),
                          ),
                        ne(e.qrCodeDisplay),
                        ae(e.qrCodeVerify),
                        de(e.numericCodeV3),
                        _e(e.numericCodeV4)),
                      Se())
                    : (Re(), fe()));
              }));
        },
        he = o("useWAWebTimeout").useTimeout(
          m(
            function () {
              return j(null);
            },
            [j],
          ),
          P,
        ),
        ye = he[0],
        Ce = function (t) {
          (H("qr"), j(t), ye());
        },
        be = function () {
          Q &&
            z == null &&
            Ce(
              s._(
                /*BTDS*/ "Try increasing the brightness or reducing light reflection.",
              ),
            );
        },
        ve = o("useWAWebTimeout").useTimeout(ge, M),
        Se = ve[0],
        Re = ve[1],
        Le = o("useWAWebTimeout").useTimeout(
          m(
            function () {
              return H("qr");
            },
            [H],
          ),
          $,
        ),
        Ee = Le[0];
      function ke(e) {
        ($e(), j(null), H(e), Ee());
      }
      var Ie = o("useWAWebTimeout").useTimeout(be, N),
        Te = Ie[0],
        De = function (t) {
          Z(t);
        },
        xe = function (t) {
          var e,
            n = S.displayName;
          switch (t) {
            case o("WAValidateFingerprints").FingerprintValidationResult
              .UNEXPECTED_VERSION_OLD:
              e = s._(
                /*BTDS*/ "The scanned QR code was generated by an out of date app version. Update the other device to the latest version and try again.",
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .UNEXPECTED_VERSION_NEW:
              e = s._(
                /*BTDS*/ "Your client version is out of date. Update this device to the latest version and try again.",
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_WRONG_CHAT_PEER:
              e = s._(
                /*BTDS*/ 'You opened "Verify Security Code" for the wrong account on your other device. Open it for {contact_name} to verify.',
                [s._param("contact_name", n)],
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_WRONG_CHAT:
              e = s._(
                /*BTDS*/ 'You opened "Verify Security Code" for the wrong account. Open it for the correct account to verify {contact_name}.',
                [s._param("contact_name", n)],
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .LOCAL_WRONG_CHAT:
              e = s._(
                /*BTDS*/ '{contact_name} opened "Verify Security Code" for the wrong chat. Ask {contact_name} to open it for your account.',
                [s._param("contact_name", n)],
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .LOCAL_PN_MISMATCH:
              e = s._(
                /*BTDS*/ "Unable to verify your phone number. Share your phone number with {contact_name} and try again.",
                [s._param("contact_name", n)],
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_PN_MISMATCH:
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_PN_MISMATCH_PEER:
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_PN_MISSING_PEER:
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_PN_MISSING:
              e = s._(
                /*BTDS*/ "Unable to verify the phone number of {contact_name}. Ask {contact_name} to share their phone number and try again.",
                [s._param("contact_name", n)],
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .LOCAL_USERNAME_MISMATCH:
            case o("WAValidateFingerprints").FingerprintValidationResult
              .LOCAL_USERNAME_MISSING_PEER:
            case o("WAValidateFingerprints").FingerprintValidationResult
              .LOCAL_USERNAME_MISSING:
              e = s._(
                /*BTDS*/ "Unable to verify your username. Send a message to {contact_name} and try again.",
                [s._param("contact_name", n)],
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_USERNAME_MISMATCH_PEER:
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_USERNAME_MISMATCH:
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_USERNAME_MISSING_PEER:
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_USERNAME_MISSING:
              e = s._(
                /*BTDS*/ "Unable to verify the username of {contact_name}. Ask {contact_name} to send you a message and try again.",
                [s._param("contact_name", n)],
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .LOCAL_USERNAME_UNEXPECTED:
              e = s._(
                /*BTDS*/ "Unable to verify your username. Send a message to {contact_name} and try again.",
                [s._param("contact_name", n)],
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_USERNAME_UNEXPECTED:
              e = s._(
                /*BTDS*/ "Unable to verify the username of {contact_name}. Ask {contact_name} to send you a message and try again.",
                [s._param("contact_name", n)],
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .LOCAL_DISPLAY_NAME_MISSING:
            case o("WAValidateFingerprints").FingerprintValidationResult
              .LOCAL_DISPLAY_NAME_MISSING_PEER:
              e = s._(
                /*BTDS*/ "Unable to verify your display name. Send a message to {contact_name} and try again.",
                [s._param("contact_name", n)],
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_DISPLAY_NAME_MISSING:
            case o("WAValidateFingerprints").FingerprintValidationResult
              .REMOTE_DISPLAY_NAME_MISSING_PEER:
              e = s._(
                /*BTDS*/ "Unable to verify the display name of {contact_name}. Ask {contact_name} to send you a message and try again.",
                [s._param("contact_name", n)],
              );
              break;
            case o("WAValidateFingerprints").FingerprintValidationResult
              .MALFORMED_CODE:
            default:
              e = s._(
                /*BTDS*/ "The image does not contain a valid identity verification QR code.",
              );
              break;
          }
          return e;
        },
        $e = function () {
          (j(null), X(null), (B.current = null));
        },
        Pe = function (t) {
          var e = xe(t);
          Ce(e);
        },
        Ne = function (t, n) {
          var e = A(t);
          if (!(n && !e)) {
            var a = F(e, r("WANullthrows")(oe));
            if (
              a ===
              o("WAValidateFingerprints").FingerprintValidationResult.SUCCESS
            ) {
              ke("checkmark");
              return;
            }
            if (
              a ===
                o("WAValidateFingerprints").FingerprintValidationResult
                  .LOCAL_KEYS_MISMATCH ||
              a ===
                o("WAValidateFingerprints").FingerprintValidationResult
                  .REMOTE_KEYS_MISMATCH ||
              a ===
                o("WAValidateFingerprints").FingerprintValidationResult
                  .LOCAL_PN_MISMATCH_PEER ||
              a ===
                o("WAValidateFingerprints").FingerprintValidationResult
                  .REMOTE_HOSTED_DEVICE_MISSMATCH ||
              a ===
                o("WAValidateFingerprints").FingerprintValidationResult
                  .LOCAL_HOSTED_DEVICE_MISSMATCH ||
              a ===
                o("WAValidateFingerprints").FingerprintValidationResult
                  .LOCAL_USERNAME_MISMATCH_PEER
            ) {
              ke("error");
              return;
            }
            Pe(a);
          }
        },
        Me = function (t) {
          (t.stopPropagation(), we(t.target.files));
        },
        we = function (t) {
          if (!(!t || !t[0])) {
            var e = t[0];
            Ae(e);
            var n = W.current;
            n && n.reset();
          }
        },
        Ae = function (t) {
          var e = URL.createObjectURL(t),
            n = document.createElement("canvas"),
            r = n.getContext("2d"),
            o = new Image();
          ((o.src = e),
            (o.onload = function () {
              ((n.width = o.width),
                (n.height = o.height),
                r.drawImage(o, 0, 0));
              var t = r.getImageData(0, 0, o.width, o.height);
              (Ne(t, !1), window.URL.revokeObjectURL(e));
            }));
        },
        Fe = function (t) {
          te && (t.stopPropagation(), we(t.dataTransfer.files));
        },
        Oe = function (t) {
          (H("qr"), X(t), Te());
        },
        Be = function (t) {
          var e = o("WAWebMediaCapture").start({
              type: o("WAWebMediaCaptureStreamType").WAWebMediaCaptureStreamType
                .CAMERA,
              featureSurface: o("WAWebGuidePopup.react").FeatureSurface
                .PHOTO_CAPTURE,
            }),
            n = e.asyncStream,
            r = e.disposeStream;
          ((B.current = r),
            n
              .then(Oe)
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebMiscErrors").GetUserMedia.NotAllowedError,
                  function () {
                    var e;
                    o("WAWebModalManager").ModalManager.open(
                      c.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: e.Messaging.CAMERA_FAIL,
                        type: e.GuidePopupType.GUIDE_UNBLOCK,
                        featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
                      }),
                    );
                  },
                ),
              )
              .catch(
                o("WAFilteredCatch").filteredCatch(
                  o("WAWebMiscErrors").GetUserMedia.GetUserMediaError,
                  function () {
                    var e;
                    o("WAWebModalManager").ModalManager.open(
                      c.jsx((e = o("WAWebGuidePopup.react")).GuidePopup, {
                        messaging: e.Messaging.CAMERA_MISSING,
                        type: e.GuidePopupType.GUIDE_NONE,
                        featureSurface: e.FeatureSurface.PHOTO_CAPTURE,
                      }),
                    );
                  },
                ),
              ));
        },
        We = function (t) {
          Ne(t, !0);
        },
        qe = function () {
          var e = q.current;
          e == null || e.click();
        },
        Ue = function (t) {
          g ? g() : h == null || h.requestDismiss();
        };
      p(function () {
        return (
          ge(),
          function () {
            B.current == null || B.current();
          }
        );
      }, []);
      var Ve = function () {
          se(!le);
        },
        He = null,
        Ge = null,
        ze = null,
        je;
      if (R)
        je = s._(
          /*BTDS*/ "To verify that messages with yourself are end-to-end encrypted, scan or upload this code on your device. You can also compare the number above instead.",
        );
      else {
        var Ke = L.isLid() && k == null;
        Ke
          ? (je = s._(
              /*BTDS*/ "To verify that messages and calls with {formatted_name} are end-to-end encrypted, scan or upload this code on their device.",
              [s._param("formatted_name", w)],
            ))
          : (je = s._(
              /*BTDS*/ "To verify that messages and calls with {contactName} are end-to-end encrypted, scan or upload this code on their device. You can also compare the number above instead.",
              [s._param("contactName", S.displayName)],
            ));
      }
      if (o("WAWebBizCoexGatingUtils").bizHostedDevicesEnabled()) {
        var Qe = o("WAWebABProps").getABPropConfigValue("coex_calling_enabled");
        o("WAWebMobilePlatforms").isSMB() &&
        o(
          "WAWebUserPrefsMultiDevice",
        ).getIsHostedMeAccountFromLocalStorage() === !0
          ? R
            ? (je = Qe
                ? s._(
                    /*BTDS*/ "To verify end-to-end encryption for group chats and status updates with yourself, scan this code on your device. You can also compare the numbers above instead.",
                  )
                : s._(
                    /*BTDS*/ "To verify end-to-end encryption for group chats, calls and status updates with yourself, scan this code on your device. You can also compare the numbers above instead.",
                  ))
            : (je = Qe
                ? s._(
                    /*BTDS*/ "To verify end-to-end encryption for group chats and status updates with this contact, scan this code on their device. You can also compare the numbers above instead.",
                  )
                : s._(
                    /*BTDS*/ "To verify end-to-end encryption for group chats, calls and status updates with this contact, scan this code on their device. You can also compare the numbers above instead.",
                  ))
          : O === !0 &&
            (je = Qe
              ? s._(
                  /*BTDS*/ "To verify end-to-end encryption for group chats and status updates with this business, scan this code on their device. You can also compare the numbers above instead.",
                )
              : s._(
                  /*BTDS*/ "To verify end-to-end encryption for group chats, calls and status updates with this business, scan this code on their device. You can also compare the numbers above instead.",
                ));
      }
      te &&
        (o("WAGetUserMedia").getUserMedia &&
          (He = c.jsx("div", {
            className:
              "xevwqry x2b8uid x13mwh8y x1q3qbx4 x1alahoq x78zum5 xl56j7k",
            children:
              Q != null
                ? c.jsx(o("WAWebButton.react").Button, {
                    type: "primary",
                    onClick: $e,
                    children: s._(/*BTDS*/ "Turn off camera"),
                  })
                : c.jsx(o("WAWebButton.react").Button, {
                    type: "primary",
                    onClick: Be,
                    children: s._(/*BTDS*/ "Scan code"),
                  }),
          })),
        (Ge = c.jsxs("div", {
          className:
            "x2b8uid x13mwh8y x1q3qbx4 x1alahoq x98l61r x78zum5 xl56j7k",
          children: [
            c.jsx(o("WAWebButton.react").Button, {
              type: "primary",
              onClick: qe,
              children: s._(/*BTDS*/ "Upload code"),
            }),
            J &&
              c.jsx("div", {
                className:
                  "x78zum5 xl56j7k x6s0dn4 x1jchvi3 x2b8uid x10l6tqk x13vifvy xtijo5x x1ey2m1c x1o0tod x1417sbz",
                children: s._(/*BTDS*/ "Release to verify\u2026"),
              }),
          ],
        })),
        (ze = c.jsx("form", {
          ref: W,
          method: "POST",
          children: c.jsx("input", {
            ref: q,
            accept: "image/*",
            type: "file",
            style: { display: "none" },
            onChange: Me,
            onClick: o("WAWebStopEvent").stopPropagation,
          }),
        })));
      var Xe = le ? (pe != null ? pe : ce) : ce != null ? ce : pe,
        Ye =
          ce != null &&
          pe != null &&
          c.jsx("div", {
            className:
              "xevwqry x2b8uid x13mwh8y x1q3qbx4 x1alahoq x78zum5 xl56j7k",
            children: c.jsx(o("WAWebButton.react").Button, {
              type: "secondary",
              onClick: Ve,
              children: le
                ? s._(/*BTDS*/ "Try an older set of numbers")
                : s._(/*BTDS*/ "Try a newer set of numbers"),
            }),
          }),
        Je =
          Q &&
          c.jsx(x, {
            stream: Q,
            disposeStream: B.current,
            onCapture: We,
            onClose: $e,
          }),
        Ze,
        et;
      u ? (Ze = Ue) : (et = Ue);
      var tt = c.jsx(o("WAWebName.react").Name, {
        contact: i,
        showBusinessCheckmark: E,
        titlify: !0,
        ellipsify: !0,
        showMessageYourselfName: !0,
      });
      return c.jsxs(r("WAWebDrawer.react"), {
        ref: n,
        onDrop: Fe,
        onDragChange: De,
        tsNavigationData: { surface: "unknown", viewName: "verification" },
        children: [
          c.jsxs(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.SMALL,
            rtlFixIfOnDarwin: !0,
            onBack: et,
            onCancel: Ze,
            children: [
              c.jsx(o("WAWebText.react").WAWebTextTitle, {
                children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: s._(/*BTDS*/ "Verify security code"),
                }),
              }),
              c.jsx(o("WAWebText.react").WAWebTextSmall, {
                xstyle: C.noWrap,
                children: R
                  ? tt
                  : c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: s._(/*BTDS*/ "You, {contact-name}", [
                        s._param("contact-name", v),
                      ]),
                      ellipsify: !0,
                    }),
              }),
            ],
          }),
          Je,
          z != null && c.jsx(I, { children: z }),
          c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsxs("div", {
              className: "x1c4vz4f x2lah0s xdl72j9 x2pn4ns x1w3bhph x100ojz0",
              children: [
                c.jsx("div", {
                  className:
                    "x78zum5 xl56j7k xevwqry x1bo0p19 x1jpgh95 xyt666n x7v9bd0 x1alahoq",
                  children: c.jsx(T, { state: V, binary: te, contact: i }),
                }),
                c.jsxs("div", {
                  className: "xevwqry x2b8uid x13mwh8y x1q3qbx4 x1alahoq",
                  children: [
                    c.jsx("div", {
                      className: "x1de0gy x2b8uid",
                      dir: "ltr",
                      children:
                        Xe != null &&
                        c.jsx(
                          o("WAWebVerificationNumericCode.react")
                            .VerificationNumericCode,
                          { string: Xe },
                        ),
                    }),
                    Ye,
                  ],
                }),
                c.jsx("div", {
                  className: "xevwqry x2b8uid x13mwh8y x1q3qbx4 x1alahoq",
                  children: c.jsxs("p", {
                    className: "x1f6kntn x1fc57z9 xhslqc4 x2b8uid",
                    children: [
                      c.jsxs("span", { children: [je, "\xA0"] }),
                      c.jsx(o("WAWebExternalLink.react").ExternalLink, {
                        href: o("WAWebFaqUrl").getE2EFaqUrl(),
                        children: r("WAWebFbtCommon")("Learn more"),
                      }),
                    ],
                  }),
                }),
                He,
                Ge,
                ze,
              ],
            }),
          }),
        ],
      });
    }
    w.displayName = w.name + " [from " + i.id + "]";
    function A(e) {
      var t = r("jsqr")(e.data, e.width, e.height, {
        inversionAttempts: "dontInvert",
      });
      return t ? Uint8Array.from(t.binaryData) : null;
    }
    function F(e, t) {
      if (!e)
        return o("WAValidateFingerprints").FingerprintValidationResult
          .MALFORMED_CODE;
      try {
        return o("WAValidateFingerprints").validateFingerprint(
          e,
          new Uint8Array(t),
          !0,
          o(
            "WAWebBizCoexGatingUtils",
          ).hostedDeviceSecurityCodeVerificationEnabled(),
        );
      } catch (e) {
        return o("WAValidateFingerprints").FingerprintValidationResult
          .MALFORMED_CODE;
      }
    }
    l.default = w;
  },
  226,
);
