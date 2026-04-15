__d(
  "WAWebContactInfoIntegritySection.react",
  [
    "fbt",
    "WALogger",
    "WAWebBlockContactUtils",
    "WAWebBlockContants",
    "WAWebChatCollection",
    "WAWebChatInfoDrawerSection.react",
    "WAWebContactGetters",
    "WAWebDrawerButtonRefreshed.react",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebModalManager",
    "WAWebName.react",
    "WAWebReportContactPopup.react",
    "WAWebSpamConstants",
    "WAWebUseBusinessProfile.react",
    "WAWebWid",
    "WDSIconIcBlock.react",
    "WDSIconIcThumbDown.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebContactValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = {
        name: {
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          textOverflow: "xlyipyv",
          maxWidth: "x1j9u4d2",
          $$css: !0,
        },
      };
    function m(t) {
      var a,
        i = o("react-compiler-runtime").c(37),
        l = t.contact,
        u;
      if (i[0] === Symbol.for("react.memo_cache_sentinel")) {
        var m;
        ((u = [
          (m = o("WAWebContactGetters")).getId,
          o("WAWebFrontendContactGetters").getDisplayName,
          m.getIsBusiness,
          o("WAWebFrontendContactGetters").getIsContactBlocked,
          m.getIsIAS,
          o("WAWebFrontendContactGetters").getIsMyContact,
          m.getIsCAPISupportAccount,
        ]),
          (i[0] = u));
      } else u = i[0];
      var p = o("useWAWebContactValues").useContactValues(l.id, u),
        _ = p[0],
        f = p[2],
        g = p[3],
        h = p[4],
        y = p[6],
        C;
      i[1] !== l
        ? ((C = c.jsx(o("WAWebName.react").Name, {
            contact: l,
            skipCheckMark: !0,
            truncateName: !0,
            xstyle: d.name,
          })),
          (i[1] = l),
          (i[2] = C))
        : (C = i[2]);
      var b = C,
        v =
          (a = o("WAWebUseBusinessProfile.react").useBusinessProfile(_, [
            "isBizBot3p",
          ])) != null
            ? a
            : {},
        S = v.isBizBot3p,
        R = S === void 0 ? !1 : S,
        L = null;
      if (!_.isBot())
        if (g) {
          var E;
          i[3] !== b || i[4] !== R
            ? ((E = R
                ? s._(/*BTDS*/ "Unblock AI")
                : s._(/*BTDS*/ "Unblock {contact_name}", [
                    s._param("contact_name", b),
                  ])),
              (i[3] = b),
              (i[4] = R),
              (i[5] = E))
            : (E = i[5]);
          var k = E,
            I;
          i[6] !== l
            ? ((I = function () {
                return o("WAWebBlockContactUtils").handleUnblock(
                  l,
                  o("WAWebBlockContants").BlockEntryPoint.Profile,
                );
              }),
              (i[6] = l),
              (i[7] = I))
            : (I = i[7]);
          var T = I,
            D;
          i[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((D = c.jsx(r("WDSIconIcBlock.react"), {})), (i[8] = D))
            : (D = i[8]);
          var x;
          (i[9] !== T || i[10] !== k
            ? ((x = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
                testid: void 0,
                icon: D,
                onClick: T,
                children: k,
              })),
              (i[9] = T),
              (i[10] = k),
              (i[11] = x))
            : (x = i[11]),
            (L = x));
        } else {
          var $;
          i[12] !== l.id || i[13] !== _
            ? (($ = (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var e = o("WAWebChatCollection").ChatCollection.get(_);
                    if (e == null) {
                      var t = yield o(
                        "WAWebFindChatAction",
                      ).findOrCreateLatestChat(
                        l.id,
                        "blockFromIntegritySection",
                      );
                      e = t.chat;
                    }
                    o("WAWebBlockContactUtils").handleBlock(
                      e,
                      o("WAWebBlockContants").BlockEntryPoint.Profile,
                    );
                  },
                );
                return function () {
                  return e.apply(this, arguments);
                };
              })()),
              (i[12] = l.id),
              (i[13] = _),
              (i[14] = $))
            : ($ = i[14]);
          var P = $,
            N;
          i[15] !== b || i[16] !== R
            ? ((N = R
                ? s._(/*BTDS*/ "Block AI")
                : s._(/*BTDS*/ "Block {contact_name}", [
                    s._param("contact_name", b),
                  ])),
              (i[15] = b),
              (i[16] = R),
              (i[17] = N))
            : (N = i[17]);
          var M = N,
            w;
          i[18] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = c.jsx(r("WDSIconIcBlock.react"), {})), (i[18] = w))
            : (w = i[18]);
          var A;
          (i[19] !== M || i[20] !== P
            ? ((A = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
                testid: void 0,
                danger: !0,
                icon: w,
                onClick: P,
                children: M,
              })),
              (i[19] = M),
              (i[20] = P),
              (i[21] = A))
            : (A = i[21]),
            (L = A));
        }
      var F;
      i[22] !== l
        ? ((F = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                  l.id,
                  "reportFromIntegritySection",
                ),
                n = t.chat;
              if (n == null) {
                (o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Unexpected null chat during reporting from contact info",
                    ])),
                ),
                  o("WAWebModalManager").ModalManager.close());
                return;
              }
              o("WAWebModalManager").ModalManager.open(
                c.jsx(r("WAWebReportContactPopup.react"), {
                  chat: n,
                  spamFlow: o("WAWebSpamConstants").SpamFlow.AccountInfoReport,
                }),
              );
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (i[22] = l),
          (i[23] = F))
        : (F = i[23]);
      var O = F,
        B;
      i[24] !== y || i[25] !== h
        ? ((B =
            h || y ? s._(/*BTDS*/ "Report") : s._(/*BTDS*/ "Report business")),
          (i[24] = y),
          (i[25] = h),
          (i[26] = B))
        : (B = i[26]);
      var W = B;
      if (!f) {
        var q;
        (i[27] !== b
          ? ((q = s._(/*BTDS*/ "Report {contact_name}", [
              s._param("contact_name", b),
            ])),
            (i[27] = b),
            (i[28] = q))
          : (q = i[28]),
          (W = q));
      }
      if (R) {
        var U;
        (i[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = s._(/*BTDS*/ "Report AI")), (i[29] = U))
          : (U = i[29]),
          (W = U));
      }
      var V;
      if (!r("WAWebWid").isPSA(_) && !_.isBot()) {
        var H = O,
          G;
        i[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = c.jsx(r("WDSIconIcThumbDown.react"), {})), (i[30] = G))
          : (G = i[30]);
        var z;
        (i[31] !== H || i[32] !== W
          ? ((z = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
              testid: void 0,
              danger: !0,
              icon: G,
              onClick: H,
              children: W,
            })),
            (i[31] = H),
            (i[32] = W),
            (i[33] = z))
          : (z = i[33]),
          (V = z));
      }
      var j;
      return (
        i[34] !== L || i[35] !== V
          ? ((j = c.jsxs(
              o("WAWebChatInfoDrawerSection.react")
                .ChatInfoDrawerButtonsSection,
              { children: [L, V] },
            )),
            (i[34] = L),
            (i[35] = V),
            (i[36] = j))
          : (j = i[36]),
        j
      );
    }
    l.default = m;
  },
  226,
);
