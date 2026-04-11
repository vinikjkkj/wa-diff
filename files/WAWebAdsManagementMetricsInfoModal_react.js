__d(
  "WAWebAdsManagementMetricsInfoModal.react",
  [
    "fbt",
    "WAWebConfirmPopup.react",
    "WAWebCopyPasteSelectable.react",
    "WAWebExternalLink.react",
    "WAWebFlex.react",
    "WAWebModalManager",
    "WAWebText.react",
    "justknobx",
    "react",
    "react-compiler-runtime",
    "vulture",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = "https://www.facebook.com/business/help/1406571646230212",
      d = "https://www.facebook.com/business/help/2038363993156008",
      m = "https://www.facebook.com/business/help/710746785663278",
      p = "https://www.facebook.com/business/help/283579896000936",
      _ = "https://www.facebook.com/business/help/675615482516035",
      f = "https://www.facebook.com/business/help/metrics-labeling",
      g =
        "https://www.facebook.com/business/help/458681590974355?id=768381033531365",
      h = { paddingTop16: { paddingTop: "x1p57kb1", $$css: !0 } },
      y = r("justknobx")._("2695");
    function C() {
      o("WAWebModalManager").ModalManager.open(u.jsx(S, {}));
    }
    function b(e) {
      var t = o("react-compiler-runtime").c(6),
        n = e.children,
        a = e.url;
      r("vulture")("56t4Vkt65MD_3BbcGDwAe0FDlWU=");
      var i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = "x1ypdohk"), (t[0] = i))
        : (i = t[0]);
      var l;
      t[1] !== a
        ? ((l = function () {
            return o("WAWebExternalLink.react").openExternalLink(a);
          }),
          (t[1] = a),
          (t[2] = l))
        : (l = t[2]);
      var s;
      return (
        t[3] !== n || t[4] !== l
          ? ((s = u.jsx(o("WAWebCopyPasteSelectable.react").SelectableLink, {
              className: i,
              selectable: !0,
              onClick: l,
              children: n,
            })),
            (t[3] = n),
            (t[4] = l),
            (t[5] = s))
          : (s = t[5]),
        s
      );
    }
    var v = function () {
        return u.jsxs(o("WAWebFlex.react").FlexColumn, {
          children: [
            u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
              children: s._(/*BTDS*/ "Reach"),
            }),
            u.jsx(o("WAWebText.react").WAWebTextSmall, {
              children: y
                ? s._(
                    /*BTDS*/ "The number of {accounts_link} that saw your ads at least once. Reach is different from {=m6}, which may include multiple views of your ads by the same {accounts_term}. {=m11}",
                    [
                      s._param(
                        "accounts_link",
                        u.jsx(b, {
                          url: p,
                          children: s._(/*BTDS*/ "Meta Accounts"),
                        }),
                      ),
                      s._param("accounts_term", s._(/*BTDS*/ "Meta Accounts")),
                      s._implicitParam(
                        "=m6",
                        u.jsx(b, {
                          url: _,
                          children: s._(/*BTDS*/ "impressions"),
                        }),
                      ),
                      s._implicitParam(
                        "=m11",
                        u.jsx(b, {
                          url: m,
                          children: s._(/*BTDS*/ "Learn more"),
                        }),
                      ),
                    ],
                  )
                : s._(
                    /*BTDS*/ "The number of {=m2} that saw your ads at least once. Reach is different from {=m6}, which may include multiple views of your ads by the same Accounts Center accounts. {=m8}",
                    [
                      s._implicitParam(
                        "=m2",
                        u.jsx(b, {
                          url: p,
                          children: s._(/*BTDS*/ "Accounts Center accounts"),
                        }),
                      ),
                      s._implicitParam(
                        "=m6",
                        u.jsx(b, {
                          url: _,
                          children: s._(/*BTDS*/ "impressions"),
                        }),
                      ),
                      s._implicitParam(
                        "=m8",
                        u.jsx(b, {
                          url: m,
                          children: s._(/*BTDS*/ "Learn more"),
                        }),
                      ),
                    ],
                  ),
            }),
            u.jsx(o("WAWebText.react").WAWebTextSmall, {
              children: s._(/*BTDS*/ "This metric is {=m2}.", [
                s._implicitParam(
                  "=m2",
                  u.jsx(b, { url: f, children: s._(/*BTDS*/ "estimated") }),
                ),
              ]),
            }),
            u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
              xstyle: h.paddingTop16,
              children: s._(/*BTDS*/ "Amount spent"),
            }),
            u.jsx(o("WAWebText.react").WAWebTextSmall, {
              children: s._(
                /*BTDS*/ "The approximate total amount of money you've spent on your campaign, ad set or ad during its schedule. {=m1}",
                [
                  s._implicitParam(
                    "=m1",
                    u.jsx(b, { url: c, children: s._(/*BTDS*/ "Learn more") }),
                  ),
                ],
              ),
            }),
            u.jsx(o("WAWebText.react").WAWebTextSectionTitle, {
              xstyle: h.paddingTop16,
              children: s._(/*BTDS*/ "Messaging conversations started"),
            }),
            u.jsx(o("WAWebText.react").WAWebTextSmall, {
              children: s._(
                /*BTDS*/ "The number of times a messaging conversation was started with your business after at least 7 days of inactivity, {=m2}. {=m4}",
                [
                  s._implicitParam(
                    "=m2",
                    u.jsx(b, {
                      url: g,
                      children: s._(/*BTDS*/ "attributed to your ads"),
                    }),
                  ),
                  s._implicitParam(
                    "=m4",
                    u.jsx(b, { url: d, children: s._(/*BTDS*/ "Learn more") }),
                  ),
                ],
              ),
            }),
          ],
        });
      },
      S = function () {
        var e = function () {
          return o("WAWebModalManager").ModalManager.close();
        };
        return u.jsx(o("WAWebConfirmPopup.react").ConfirmPopup, {
          testid: void 0,
          onOK: e,
          okText: s._(/*BTDS*/ "Close"),
          onOverlayClick: e,
          children: u.jsx(v, {}),
        });
      };
    ((l.LEARN_MORE_AMOUNT_SPENT_URL = c),
      (l.LEARN_MORE_MESSAGING_CONVERSATIONS_STARTED_URL = d),
      (l.LEARN_MORE_REACH_URL = m),
      (l.HYPERLINKED_ACCOUNT_CENTER_ACCOUNTS_URL = p),
      (l.HYPERLINKED_IMPRESSIONS_URL = _),
      (l.HYPERLINKED_ESTIMATED_URL = f),
      (l.HYPERLINKED_ATTRIBUTED_TO_YOUR_ADS_URL = g),
      (l.displayAdsManagementMetricsInfoModal = C));
  },
  226,
);
