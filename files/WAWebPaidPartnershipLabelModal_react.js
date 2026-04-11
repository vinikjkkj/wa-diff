__d(
  "WAWebPaidPartnershipLabelModal.react",
  [
    "fbt",
    "Promise",
    "WAJids",
    "WAWebActionToast.react",
    "WAWebConfirmPopup.react",
    "WAWebExternalLink.react",
    "WAWebFaqUrl",
    "WAWebFbtCommon",
    "WAWebFlex.react",
    "WAWebFrontendMsgGetters",
    "WAWebModal.react",
    "WAWebModalManager",
    "WAWebNetworkStatus",
    "WAWebNewsletterAddPaidPartnershipLabelAction",
    "WAWebToastManager",
    "WAWebWdsPictoMegaphoneAdsIcon.react",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "err",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        icon: { color: "x1v5yvga", marginBottom: "x1ua1l7f", $$css: !0 },
        titleText: {
          textAlign: "x2b8uid",
          marginBottom: "x1ua1l7f",
          $$css: !0,
        },
        centeredText: { textAlign: "x2b8uid", $$css: !0 },
      };
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          i === void 0 && (i = o("WAWebActionToast.react").genId());
          var l = o("WAWebFrontendMsgGetters").getChat(t),
            u = o("WAJids").toNewsletterJid(l.id.toJid()),
            d = t.serverId,
            p =
              d != null
                ? o(
                    "WAWebNewsletterAddPaidPartnershipLabelAction",
                  ).WAWebNewsletterAddPaidPartnershipLabelAction(
                    u,
                    d.toString(),
                    a,
                  )
                : (e || (e = n("Promise"))).resolve(!1),
            _ = s._(/*BTDS*/ "Please wait a moment"),
            f = s._(/*BTDS*/ "Paid partnership label added."),
            g = s._(/*BTDS*/ "Label not added."),
            h = new (o("WAWebActionToast.react").ActionType)(_),
            y = p
              .then(function (e) {
                if (e === !0)
                  return new (o("WAWebActionToast.react").ActionType)(f);
                throw r("err")("Label not added");
              })
              .catch(function () {
                return new (o("WAWebActionToast.react").ActionType)(g, {
                  actionText: r("WAWebFbtCommon")("Try again"),
                  actionHandler: function () {
                    return m(t, a, i);
                  },
                });
              });
          return o("WAWebToastManager").ToastManager.open(
            c.jsx(o("WAWebActionToast.react").ActionToast, {
              id: i,
              initialAction: h,
              pendingAction: y,
            }),
          );
        })),
        p.apply(this, arguments)
      );
    }
    function _(t, a, i) {
      i === void 0 && (i = o("WAWebActionToast.react").genId());
      var l = s._(/*BTDS*/ "Check your internet connection"),
        u = new (o("WAWebActionToast.react").ActionType)(l, {
          actionText: r("WAWebFbtCommon")("Try again"),
          actionHandler: function () {
            return r("WAWebNetworkStatus").online
              ? m(t, a, i)
              : (_(t, a, i), (e || (e = n("Promise"))).resolve());
          },
        });
      o("WAWebToastManager").ToastManager.open(
        c.jsx(o("WAWebActionToast.react").ActionToast, {
          id: i,
          initialAction: u,
          pendingAction: (e || (e = n("Promise"))).resolve(u),
        }),
      );
    }
    function f(e) {
      var t = o("react-compiler-runtime").c(26),
        n = e.msg,
        a = e.onClose,
        i = n.isNewsletterStatus === !0,
        l = i ? "STATUS" : "MESSAGE",
        u;
      t[0] !== a
        ? ((u = function () {
            (o("WAWebModalManager").ModalManager.close(), a == null || a());
          }),
          (t[0] = a),
          (t[1] = u))
        : (u = t[1]);
      var p = u,
        f;
      t[2] !== p || t[3] !== l || t[4] !== n
        ? ((f = function () {
            if (!r("WAWebNetworkStatus").online) {
              (_(n, l), p());
              return;
            }
            (m(n, l), p());
          }),
          (t[2] = p),
          (t[3] = l),
          (t[4] = n),
          (t[5] = f))
        : (f = t[5]);
      var g = f,
        h;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = c.jsx(o("WAWebExternalLink.react").ExternalLink, {
            href: o("WAWebFaqUrl").getPaidPartnershipLabelFaqUrl(),
            children: s._(/*BTDS*/ "Learn more"),
          })),
          (t[6] = h))
        : (h = t[6]);
      var y = h,
        C;
      t[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = { surface: "unknown", viewName: "paid-partnership-label" }),
          (t[7] = C))
        : (C = t[7]);
      var b = i ? o("WAWebModal.react").ModalTheme.StatusReport : void 0,
        v;
      t[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Add label")), (t[8] = v))
        : (v = t[8]);
      var S;
      t[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = c.jsx(
            o("WAWebWdsPictoMegaphoneAdsIcon.react").WdsPictoMegaphoneAdsIcon,
            { height: 64, width: 64, xstyle: d.icon },
          )),
          (t[9] = S))
        : (S = t[9]);
      var R;
      t[10] !== i
        ? ((R = c.jsx(r("WDSText.react"), {
            type: "Headline1",
            colorName: "contentDefault",
            xstyle: d.titleText,
            children: i
              ? s._(/*BTDS*/ "Label your status as paid partnership")
              : s._(/*BTDS*/ "Label your update as paid partnership"),
          })),
          (t[10] = i),
          (t[11] = R))
        : (R = t[11]);
      var L;
      t[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = "x78zum5 xdt5ytf x6s0dn4 x1j3ira4"), (t[12] = L))
        : (L = t[12]);
      var E;
      t[13] !== i
        ? ((E = c.jsx(r("WDSText.react"), {
            type: "Body1",
            colorName: "contentDeemphasized",
            xstyle: d.centeredText,
            children: i
              ? s._(
                  /*BTDS*/ "Only add this label to let followers know when a brand or business has compensated you to share a status. {learnMoreLink}",
                  [s._param("learnMoreLink", y)],
                )
              : s._(
                  /*BTDS*/ "Only add this label to let followers know when a brand or business has compensated you to share an update. {learnMoreLink}",
                  [s._param("learnMoreLink", y)],
                ),
          })),
          (t[13] = i),
          (t[14] = E))
        : (E = t[14]);
      var k;
      t[15] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = c.jsx(r("WDSText.react"), {
            type: "Body2",
            colorName: "contentDeemphasized",
            xstyle: d.centeredText,
            children: s._(/*BTDS*/ "Once added, this label can't be removed."),
          })),
          (t[15] = k))
        : (k = t[15]);
      var I;
      t[16] !== E
        ? ((I = c.jsxs("div", { className: L, children: [E, k] })),
          (t[16] = E),
          (t[17] = I))
        : (I = t[17]);
      var T;
      t[18] !== I || t[19] !== R
        ? ((T = c.jsxs(o("WAWebFlex.react").FlexColumn, {
            align: "center",
            children: [S, R, I],
          })),
          (t[18] = I),
          (t[19] = R),
          (t[20] = T))
        : (T = t[20]);
      var D;
      return (
        t[21] !== p || t[22] !== g || t[23] !== T || t[24] !== b
          ? ((D = c.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
              tsNavigationData: C,
              type: b,
              onOK: g,
              okText: v,
              onCancel: p,
              buttonWidth: "hug",
              children: T,
            })),
            (t[21] = p),
            (t[22] = g),
            (t[23] = T),
            (t[24] = b),
            (t[25] = D))
          : (D = t[25]),
        D
      );
    }
    l.default = f;
  },
  226,
);
