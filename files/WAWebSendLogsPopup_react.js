__d(
  "WAWebSendLogsPopup.react",
  [
    "fbt",
    "WALinkify",
    "WAWebABPropsSaga",
    "WAWebConfirmPopup.react",
    "WAWebConnModel",
    "WAWebEventFiles",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebKeyboardHotKeys.react",
    "WAWebModalManager",
    "WAWebPhoneUtils",
    "WAWebRichTextField.react",
    "WAWebStopEvent",
    "WAWebSupportChatStrings",
    "WAWebText.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUploadUserReport",
    "WAWebUserPrefsMeUser",
    "WAWebXAltIcon.react",
    "asyncToGeneratorRuntime",
    "compactMap",
    "fbs",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = e,
      d = c.useEffect,
      m = c.useRef,
      p = c.useState,
      _ = 320,
      f = 50,
      g = 10,
      h = 500,
      y = 3,
      C = 10485760;
    function b() {
      return o("WAWebConnModel").Conn.isSMB
        ? s._(/*BTDS*/ "Question about WhatsApp Business for Web")
        : s._(/*BTDS*/ "Question about WhatsApp for Web");
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(7),
        n = e.onDeleteScreenshot,
        a = e.screenshots,
        i;
      t[0] !== n
        ? ((i = function (t, r) {
            if (t.url == null) return null;
            var e = "url(" + t.url + ")",
              a = t.url + "-" + r;
            return u.jsx(
              "div",
              {
                className:
                  "x1n2onr6 x1faq86j x1vtj31x x1t79jtt xav9cv8 x7g7pl8 x4tpdpg x1wbi8v6 x1oreiyq x1vwr25l x18d0r48 x1e7nkc8",
                style: { backgroundImage: e },
                children: u.jsx("button", {
                  className: "x10l6tqk xnfr1j x1h1655f x17t9dm2",
                  onClick: function () {
                    n(r);
                  },
                  children: u.jsx(o("WAWebXAltIcon.react").XAltIcon, {}),
                }),
              },
              a,
            );
          }),
          (t[0] = n),
          (t[1] = i))
        : (i = t[1]);
      var l;
      t[2] !== a || t[3] !== i
        ? ((l = r("compactMap")(a, i)), (t[2] = a), (t[3] = i), (t[4] = l))
        : (l = t[4]);
      var s = l,
        c;
      return (
        t[5] !== s
          ? ((c =
              s.length !== 0
                ? u.jsx("div", {
                    className:
                      "x78zum5 x1tiyuxx x1uc92m x1nbhmlj x181vq82 x1q7yeco",
                    children: s,
                  })
                : null),
            (t[5] = s),
            (t[6] = c))
          : (c = t[6]),
        c
      );
    }
    function S(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.isDragging,
        r = e.onAttachClick,
        a = e.reachedMaxScreenshots;
      if (a) {
        var i;
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = u.jsx("div", {
                className:
                  "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 xlup9mm xexx8yu xyri2b x18d9i69 x1c1uobl x98l61r x1pg5gke x2b8uid xtvhhri xlwc9sh xpw2u0k xt0e3qv",
                children: s._(
                  /*BTDS*/ '_j{"*":"{number} screenshots maximum","_1":"1 screenshot maximum"}',
                  [s._plural(y, "number")],
                ),
              })),
              (t[0] = i))
            : (i = t[0]),
          i
        );
      } else if (n) {
        var l;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = u.jsx("div", {
                className:
                  "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 xlup9mm xexx8yu xyri2b x18d9i69 x1c1uobl x98l61r x1pg5gke xo1mcw5 x2b8uid xtvhhri x1ypdohk xlwc9sh",
                children: s._(/*BTDS*/ "Release to add..."),
              })),
              (t[1] = l))
            : (l = t[1]),
          l
        );
      }
      var c;
      t[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = {
            className:
              "x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 xlup9mm xexx8yu xyri2b x18d9i69 x1c1uobl x98l61r x1pg5gke xo1mcw5 x2b8uid xtvhhri x1ypdohk xlwc9sh",
          }),
          (t[2] = c))
        : (c = t[2]);
      var d;
      t[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = s._(/*BTDS*/ "Add screenshots")), (t[3] = d))
        : (d = t[3]);
      var m;
      return (
        t[4] !== r
          ? ((m = u.jsx(
              "div",
              babelHelpers.extends({}, c, { onClick: r, children: d }),
            )),
            (t[4] = r),
            (t[5] = m))
          : (m = t[5]),
        m
      );
    }
    function R(e) {
      var t,
        a = e.entityId,
        i = e.onCancel,
        l = e.onSend,
        c = e.supportTag,
        R = p(""),
        L = R[0],
        E = R[1],
        k = p(void 0),
        I = k[0],
        T = k[1],
        D = p(""),
        x = D[0],
        $ = D[1],
        P = p(void 0),
        N = P[0],
        M = P[1],
        w = p(b().toString()),
        A = w[0],
        F = w[1],
        O = p(void 0),
        B = O[0],
        W = O[1],
        q = p((t = e.description) != null ? t : ""),
        U = q[0],
        V = q[1],
        H = p(void 0),
        G = H[0],
        z = H[1],
        j = p([]),
        K = j[0],
        Q = j[1],
        X = p(!1),
        Y = X[0],
        J = X[1],
        Z = p(!1),
        ee = Z[0],
        te = Z[1],
        ne = m(null),
        re = m(null);
      d(function () {
        var e;
        return (
          (e = ne.current) == null || e.restoreFocus(),
          te(o("WAWebABPropsSaga").getIsSagaV1Enabled()),
          function () {
            K.map(function (e) {
              var t = e.url;
              return URL.revokeObjectURL(t);
            });
          }
        );
      }, []);
      var oe = function (t) {
          return t.length > g;
        },
        ae = function (t) {
          return L === t;
        },
        ie = function () {
          return K.length >= y;
        },
        le = function () {
          (i && i(), o("WAWebModalManager").ModalManager.close());
        },
        se = function (t, n) {
          J(t);
        },
        ue = function () {
          var e = x.trim();
          (x && !ae(e) && M(s._(/*BTDS*/ "The email addresses do not match")),
            $(e));
        },
        ce = function () {
          var e = L.trim();
          (L &&
            !o("WALinkify").validateEmail(e) &&
            T(s._(/*BTDS*/ "Please enter a valid email address")),
            E(e));
        },
        de = function (t) {
          (o("WALinkify").validateEmail(t) && T(void 0), E(t));
        },
        me = function () {
          U && !oe(U) && z(s._(/*BTDS*/ "Please add more to your description"));
        },
        pe = function (t) {
          if (!ie()) {
            var e;
            (e = re.current) == null || e.click();
          }
        },
        _e = function (t) {
          (t.preventDefault(),
            t.stopPropagation(),
            !ie() &&
              o("WAWebEventFiles")
                .getFiles(t, "image/*")
                .then(function (e) {
                  re.current && (re.current.value = "");
                  var t = e.filter(function (e) {
                    return e.size <= C;
                  });
                  if (
                    (t.length < e.length &&
                      o("WAWebToastManager").ToastManager.open(
                        u.jsx(o("WAWebToast.react").Toast, {
                          msg: s._(
                            /*BTDS*/ "Please upload images 10 MB or smaller",
                          ),
                        }),
                      ),
                    !ie())
                  ) {
                    var n = y - K.length,
                      r = t.slice(0, n),
                      a = r.map(function (e) {
                        return { file: e, url: URL.createObjectURL(e) };
                      });
                    Q(K.concat(a));
                  }
                }));
        },
        fe = function (t) {
          ($(t), ae(t) && M(void 0));
        },
        ge = function (t) {
          (V(t), oe(t) && z(void 0));
        },
        he = function (t) {
          (F(t), W(void 0));
        },
        ye = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = 0,
              t = L.trim(),
              n = x.trim();
            if (
              (E(t),
              $(n),
              o("WALinkify").validateEmail(t) ||
                (T(s._(/*BTDS*/ "Please enter a valid email address")),
                (e += 1)),
              ae(n) ||
                (M(s._(/*BTDS*/ "The email addresses do not match")), (e += 1)),
              oe(U) ||
                (z(s._(/*BTDS*/ "Please add more to your description")),
                (e += 1)),
              e === 0)
            ) {
              (T(void 0), M(void 0), W(void 0), z(void 0));
              var i = K.map(function (e) {
                return (URL.revokeObjectURL(e.url), e.file);
              });
              Q([]);
              var d =
                  A.trim() ||
                  r("fbs")
                    ._(/*BTDS*/ "Feedback\/question about WhatsApp")
                    .toString(),
                m = o("WAWebUserPrefsMeUser").getMaybeMePnUser(),
                p = m ? o("WAWebPhoneUtils").formatPhone(m.user) : void 0;
              (o("WAWebUploadUserReport").uploadUserReport({
                phoneNumber: p,
                email: t,
                subject: d,
                description: U,
                screenshots: i,
                supportTag: c,
                entityId: a,
              }),
                l &&
                  l({ subject: d, description: U, numScreenshots: i.length }),
                o("WAWebModalManager").ModalManager.close(),
                o("WAWebToastManager").ToastManager.open(
                  u.jsx(o("WAWebToast.react").Toast, {
                    msg: s._(/*BTDS*/ "Feedback sent"),
                  }),
                ));
            }
          });
          return function () {
            return e.apply(this, arguments);
          };
        })(),
        Ce = function (t) {
          var e = K.slice(),
            n = e.splice(t, 1),
            r = n[0];
          (URL.revokeObjectURL(r.url), Q(e));
        },
        be = u.jsxs("div", {
          children: [
            u.jsx(v, { screenshots: K, onDeleteScreenshot: Ce }),
            u.jsx(S, {
              reachedMaxScreenshots: ie(),
              isDragging: Y,
              onAttachClick: pe,
            }),
            u.jsx("input", {
              className: "x1s85apg",
              accept: "image/*",
              type: "file",
              multiple: !0,
              onClick: o("WAWebStopEvent").stopPropagation,
              onChange: _e,
              ref: re,
              disabled: ie(),
            }),
          ],
        }),
        ve = { enter: o("WAWebStopEvent").stopPropagation };
      return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
        tsNavigationData: { surface: "unknown", viewName: "send-logs" },
        title: s._(/*BTDS*/ "Contact us"),
        okText: s._(/*BTDS*/ "Send"),
        onOK: ye,
        onCancel: le,
        onDrop: _e,
        onDragChange: se,
        children: u.jsxs(o("WAWebKeyboardHotKeys.react").HotKeys, {
          handlers: ve,
          children: [
            u.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              ref: ne,
              value: L,
              error: I,
              maxLength: _,
              onChange: function (t) {
                return de(t.text);
              },
              onBlur: ce,
              placeholder: s._(/*BTDS*/ "Email address"),
            }),
            u.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              editable: !0,
              value: x,
              error: N,
              maxLength: _,
              onChange: function (t) {
                return fe(t.text);
              },
              onBlur: ue,
              placeholder: s._(/*BTDS*/ "Confirm email address"),
            }),
            u.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              value: A,
              error: B,
              maxLength: f,
              onChange: function (t) {
                return he(t.text);
              },
              placeholder: s._(/*BTDS*/ "Subject"),
            }),
            u.jsx(o("WAWebRichTextField.react").RichTextField, {
              testid: void 0,
              value: U,
              error: G,
              maxLength: h,
              onChange: function (t) {
                return ge(t.text);
              },
              onBlur: me,
              placeholder: s._(/*BTDS*/ "Tell us about your issue"),
              multiline: !0,
            }),
            be,
            ee &&
              u.jsxs(o("WAWebText.react").WAWebTextMuted, {
                marginTop: 20,
                children: [
                  o(
                    "WAWebSupportChatStrings",
                  ).SupportChatDeviceInfoDisclaimer(),
                  " ",
                  u.jsx(o("WAWebExternalLink.react").ExternalLink, {
                    href: o("WAWebFaqUrl").getSupportChatFaqUrl(),
                    children: s._(/*BTDS*/ "Learn more"),
                  }),
                ],
              }),
          ],
        }),
      });
    }
    ((R.displayName = R.name + " [from " + i.id + "]"), (l.default = R));
  },
  226,
);
