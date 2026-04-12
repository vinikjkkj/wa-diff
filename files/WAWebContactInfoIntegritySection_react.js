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
        i,
        l = t.contact,
        u = o("useWAWebContactValues").useContactValues(l.id, [
          (i = o("WAWebContactGetters")).getId,
          o("WAWebFrontendContactGetters").getDisplayName,
          i.getIsBusiness,
          o("WAWebFrontendContactGetters").getIsContactBlocked,
          i.getIsIAS,
          o("WAWebFrontendContactGetters").getIsMyContact,
          i.getIsCAPISupportAccount,
        ]),
        m = u[0],
        p = u[1],
        _ = u[2],
        f = u[3],
        g = u[4],
        h = u[5],
        y = u[6],
        C = c.jsx(o("WAWebName.react").Name, {
          contact: l,
          skipCheckMark: !0,
          truncateName: !0,
          xstyle: d.name,
        }),
        b =
          (a = o("WAWebUseBusinessProfile.react").useBusinessProfile(m, [
            "isBizBot3p",
          ])) != null
            ? a
            : {},
        v = b.isBizBot3p,
        S = v === void 0 ? !1 : v,
        R = null;
      if (!m.isBot())
        if (f) {
          var L = S
              ? s._(/*BTDS*/ "Unblock AI")
              : s._(/*BTDS*/ "Unblock {contact_name}", [
                  s._param("contact_name", C),
                ]),
            E = "li-unblock",
            k = function () {
              return o("WAWebBlockContactUtils").handleUnblock(
                l,
                o("WAWebBlockContants").BlockEntryPoint.Profile,
              );
            };
          R = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
            testid: void 0,
            icon: c.jsx(r("WDSIconIcBlock.react"), {}),
            onClick: k,
            children: L,
          });
        } else {
          var I = (function () {
              var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                function* () {
                  var e = o("WAWebChatCollection").ChatCollection.get(m);
                  if (e == null) {
                    var t = yield o(
                      "WAWebFindChatAction",
                    ).findOrCreateLatestChat(l.id, "blockFromIntegritySection");
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
            })(),
            T = S
              ? s._(/*BTDS*/ "Block AI")
              : s._(/*BTDS*/ "Block {contact_name}", [
                  s._param("contact_name", C),
                ]),
            D = "li-block";
          R = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
            testid: void 0,
            danger: !0,
            icon: c.jsx(r("WDSIconIcBlock.react"), {}),
            onClick: I,
            children: T,
          });
        }
      var x = (function () {
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
        })(),
        $ = g || y ? s._(/*BTDS*/ "Report") : s._(/*BTDS*/ "Report business");
      (_ ||
        ($ = s._(/*BTDS*/ "Report {contact_name}", [
          s._param("contact_name", C),
        ])),
        S && ($ = s._(/*BTDS*/ "Report AI")));
      var P;
      if (!r("WAWebWid").isPSA(m) && !m.isBot()) {
        var N = "li-report-spam",
          M = x;
        P = c.jsx(r("WAWebDrawerButtonRefreshed.react"), {
          testid: void 0,
          danger: !0,
          icon: c.jsx(r("WDSIconIcThumbDown.react"), {}),
          onClick: M,
          children: $,
        });
      }
      return c.jsxs(
        o("WAWebChatInfoDrawerSection.react").ChatInfoDrawerButtonsSection,
        { children: [R, P] },
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  226,
);
