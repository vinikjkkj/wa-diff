__d(
  "WAWebUsernameContactField.react",
  [
    "fbt",
    "WALogger",
    "WAWebClickableLink.react",
    "WAWebCmd",
    "WAWebContactCollection",
    "WAWebContactLogging",
    "WAWebContactSyncLogger",
    "WAWebFindChatAction",
    "WAWebFlex.react",
    "WAWebFrontendContactGetters",
    "WAWebMentionsRefreshedIcon.react",
    "WAWebQueryExistsJob",
    "WAWebRichTextField.react",
    "WAWebUsernameUtils",
    "WAWebUsernameValidationUtils",
    "WAWebWidFactory",
    "WDSText.react",
    "asyncToGeneratorRuntime",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useLazyRef",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        iconSection: {
          display: "x78zum5",
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          justifyContent: "x1nhvcw1",
          alignItems: "x6s0dn4",
          color: "xhslqc4",
          $$css: !0,
        },
        marginTop28: { marginTop: "xevwqry", $$css: !0 },
        marginStart12: { marginInlineStart: "x1uvdrpn", $$css: !0 },
        paddingHoriz24: {
          paddingInlineStart: "xb0esv5",
          paddingInlineEnd: "xyo0t3i",
          paddingLeft: null,
          paddingRight: null,
          $$css: !0,
        },
      };
    function p(t) {
      var a = o("react-compiler-runtime").c(30),
        i = t.contactLid,
        l = t.onInvalidUsername,
        u = t.origin,
        p = t.setContactLid,
        f = t.setUsernameInput,
        g = t.setUsernameState,
        h = t.usernameInput,
        y = t.usernameState,
        C = d(!1),
        b = C[0],
        v = C[1],
        S = r("useLazyRef")(_),
        R;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((R = s._(/*BTDS*/ "Username")), (a[0] = R))
        : (R = a[0]);
      var L = R,
        E;
      if (a[1] !== l || a[2] !== S || a[3] !== p || a[4] !== f || a[5] !== g) {
        E = function (t) {
          f(t);
          var e = o("WAWebUsernameValidationUtils").validateUsernameLocally(t),
            n = e.isValid;
          if (t.length < 3 || !n) {
            g(null);
            return;
          }
          (S.current.abort(),
            (S.current = new AbortController()),
            v(!0),
            g(null));
          var r = S.current.signal;
          window.setTimeout(function () {
            return void k(t, r);
          }, 750);
        };
        var k = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if ((r("isStringNullOrEmpty")(e) && v(!1), t.aborted)) {
                v(!1);
                return;
              }
              var n = yield o("WAWebQueryExistsJob").queryUsernameExists(
                e,
                null,
                o("WAWebContactSyncLogger").SYNC_REQUEST_ORIGIN.CONTACT_SAVE,
              );
              if (n != null && n.wid) {
                var a = o("WAWebContactCollection").ContactCollection.get(
                    n.wid,
                  ),
                  i =
                    a != null &&
                    o("WAWebFrontendContactGetters").getIsMyContact(a);
                (g(i ? "already-contact" : "exists"),
                  p(o("WAWebWidFactory").asUserLidOrThrow(n.wid)));
              } else
                n != null && n.keyRequired
                  ? g("key-required")
                  : (g("does-not-exist"), l());
              v(!1);
            },
          );
          return function (n, r) {
            return e.apply(this, arguments);
          };
        })();
        ((a[1] = l),
          (a[2] = S),
          (a[3] = p),
          (a[4] = f),
          (a[5] = g),
          (a[6] = E));
      } else E = a[6];
      var I;
      a[7] !== i
        ? ((I = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
              if (i) {
                var t = yield o("WAWebFindChatAction").findOrCreateLatestChat(
                    i,
                    "createContact",
                  ),
                  n = t.chat;
                (yield o("WAWebCmd").Cmd.openChatAt({
                  chat: n,
                  msgContext: null,
                }),
                  o("WAWebCmd").Cmd.chatInfoDrawer(n, {
                    showFullGroupDescription: !1,
                    scrollToParticipantList: !1,
                  }));
              } else
                o("WALogger")
                  .ERROR(
                    e ||
                      (e = babelHelpers.taggedTemplateLiteralLoose([
                        "[UsernameContactField] view contact: no LID",
                      ])),
                  )
                  .sendLogs("view-existing-contact-no-lid-found", {
                    sampling: 0.01,
                  });
            });
            return function () {
              return t.apply(this, arguments);
            };
          })()),
          (a[7] = i),
          (a[8] = I))
        : (I = a[8]);
      var T = I,
        D;
      a[9] !== y
        ? ((D = o("WAWebUsernameUtils").usernameInputStateIsValid(y)),
          (a[9] = y),
          (a[10] = D))
        : (D = a[10]);
      var x = D,
        $ = h != null && x,
        P;
      a[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = s._(/*BTDS*/ "This username is not on WhatsApp.")), (a[11] = P))
        : (P = a[11]);
      var N = P,
        M;
      a[12] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = s._(/*BTDS*/ "This username is on WhatsApp.")), (a[12] = M))
        : (M = a[12]);
      var w = M,
        A;
      a[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((A = s._(/*BTDS*/ "This person is already in your contacts.")),
          (a[13] = A))
        : (A = a[13]);
      var F = A,
        O;
      a[14] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = c.jsx(r("WDSText.react"), {
            type: "Body2Emphasized",
            colorName: "contentActionEmphasized",
            textAlign: "start",
            children: s._(/*BTDS*/ "View contact"),
          })),
          (a[14] = O))
        : (O = a[14]);
      var B;
      a[15] !== T
        ? ((B = c.jsx(r("WAWebClickableLink.react"), {
            onClick: T,
            children: O,
          })),
          (a[15] = T),
          (a[16] = B))
        : (B = a[16]);
      var W = B,
        q =
          y === "already-contact" &&
          u === o("WAWebContactLogging").ContactSourceType.NewChat,
        U = !b && x,
        V;
      U ? (V = q ? F : w) : !b && y === "does-not-exist" && (V = N);
      var H;
      a[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = c.jsx(o("WAWebFlex.react").FlexItem, {
            xstyle: m.iconSection,
            children: c.jsx(
              o("WAWebMentionsRefreshedIcon.react").MentionsRefreshedIcon,
              { width: 26, height: 26, xstyle: m.marginTop28 },
            ),
          })),
          (a[17] = H))
        : (H = a[17]);
      var G;
      a[18] !== E
        ? ((G = function (t) {
            var e = t.text;
            E(e);
          }),
          (a[18] = E),
          (a[19] = G))
        : (G = a[19]);
      var z = b || $,
        j;
      a[20] !== $ ||
      a[21] !== b ||
      a[22] !== G ||
      a[23] !== z ||
      a[24] !== V ||
      a[25] !== h
        ? ((j = c.jsx(o("WAWebRichTextField.react").RichTextField, {
            pending: b,
            onChange: G,
            theme: "text-input",
            focusOnMount: !0,
            value: h,
            placeholder: L,
            maxLength: 30,
            showRemaining: !0,
            charLimit: 4,
            spellCheck: !1,
            showValidateIcon: z,
            showSuccessIcon: $,
            contextMsg: V,
          })),
          (a[20] = $),
          (a[21] = b),
          (a[22] = G),
          (a[23] = z),
          (a[24] = V),
          (a[25] = h),
          (a[26] = j))
        : (j = a[26]);
      var K = U && q ? W : null,
        Q;
      return (
        a[27] !== j || a[28] !== K
          ? ((Q = c.jsxs(o("WAWebFlex.react").FlexRow, {
              xstyle: m.paddingHoriz24,
              children: [
                H,
                c.jsxs(o("WAWebFlex.react").FlexItem, {
                  xstyle: m.marginStart12,
                  grow: 1,
                  shrink: 1,
                  children: [j, K],
                }),
              ],
            })),
            (a[27] = j),
            (a[28] = K),
            (a[29] = Q))
          : (Q = a[29]),
        Q
      );
    }
    function _() {
      return new AbortController();
    }
    l.default = p;
  },
  226,
);
