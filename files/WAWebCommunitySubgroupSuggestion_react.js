__d(
  "WAWebCommunitySubgroupSuggestion.react",
  [
    "fbt",
    "WALogger",
    "WAWebCellRequest.react",
    "WAWebCellRequestState",
    "WAWebClock",
    "WAWebCmd",
    "WAWebComposeBoxActions",
    "WAWebDetailImage.react",
    "WAWebDropdownItem.react",
    "WAWebEmojiText.react",
    "WAWebFindChatAction",
    "WAWebFrontendContactGetters",
    "WAWebPeopleIcon.react",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebUimUie.react",
    "WAWebUimUieMenu.react",
    "WAWebUserPrefsMeUser",
    "WDSIconIcVisibilityOff.react",
    "asyncToGeneratorRuntime",
    "react",
    "react-compiler-runtime",
    "useWAWebEventTargetValue",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState,
      m = {
        text: {
          maxWidth: "x193iq5w",
          whiteSpace: "xuxw1ft",
          textOverflow: "xlyipyv",
          overflowX: "x6ikm8r",
          overflowY: "x10wlt62",
          $$css: !0,
        },
        dropdownText: { display: "x78zum5", alignItems: "x6s0dn4", $$css: !0 },
      };
    function p(t) {
      var a = o("react-compiler-runtime").c(60),
        i = t.isAdmin,
        l = t.onSubgroupSuggestionAction,
        u = t.subgroupSuggestion,
        p;
      a[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = ["change:currentState", "change:error"]), (a[0] = p))
        : (p = a[0]);
      var _;
      a[1] !== u.currentState || a[2] !== u.error
        ? ((_ = function () {
            return [u.currentState, u.error];
          }),
          (a[1] = u.currentState),
          (a[2] = u.error),
          (a[3] = _))
        : (_ = a[3]);
      var f = r("useWAWebEventTargetValue")(u, p, _),
        g = f[0],
        h = f[1],
        y = d(),
        C = y[0],
        b = y[1],
        v;
      a[4] !== u.owner
        ? ((v = o("WAWebUserPrefsMeUser").isMeAccount(u.owner)),
          (a[4] = u.owner),
          (a[5] = v))
        : (v = a[5]);
      var S = v,
        R;
      a[6] !== u.ownerContact
        ? ((R = function (r) {
            var t = u.ownerContact.id,
              a = s._(/*BTDS*/ "Message {name}", [
                s._param(
                  "name",
                  o("WAWebFrontendContactGetters").getFormattedShortName(
                    u.ownerContact,
                  ),
                ),
              ]),
              i = (function () {
                var r = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    try {
                      var n = yield o(
                          "WAWebFindChatAction",
                        ).findOrCreateLatestChat(
                          t,
                          "communitySubgroupSuggestions",
                        ),
                        r = n.chat,
                        a = yield o("WAWebCmd").Cmd.openChatFromUnread({
                          chat: r,
                        });
                      a &&
                        o("WAWebComposeBoxActions").ComposeBoxActions.focus(r);
                    } catch (t) {
                      var i = t;
                      o("WALogger").ERROR(
                        e ||
                          (e = babelHelpers.taggedTemplateLiteralLoose([
                            "Opening chat failed with exceptions",
                          ])),
                      );
                    }
                  },
                );
                return function () {
                  return r.apply(this, arguments);
                };
              })();
            b({
              contactId: t,
              menu: [
                c.jsx(
                  o("WAWebDropdownItem.react").DropdownItem,
                  {
                    testid: void 0,
                    action: i,
                    ariaLabel: a,
                    addSpacing: !0,
                    children: c.jsx(o("WAWebEmojiText.react").EmojiText, {
                      text: a,
                      xstyle: m.dropdownText,
                    }),
                  },
                  "message-suggestion-owner",
                ),
              ],
              anchor: r.target,
            });
          }),
          (a[6] = u.ownerContact),
          (a[7] = R))
        : (R = a[7]);
      var L = R,
        E;
      a[8] !== l || a[9] !== u
        ? ((E = function (t, n) {
            (t.stopPropagation(), l(u, n));
          }),
          (a[8] = l),
          (a[9] = u),
          (a[10] = E))
        : (E = a[10]);
      var k = E,
        I;
      a[11] !== h
        ? ((I = function (t) {
            (t.stopPropagation(),
              h != null &&
                o("WAWebToastManager").ToastManager.open(
                  c.jsx(o("WAWebToast.react").Toast, { msg: h }),
                ));
          }),
          (a[11] = h),
          (a[12] = I))
        : (I = a[12]);
      var T = I,
        D;
      a[13] !== u.ownerContact
        ? ((D = o("WAWebFrontendContactGetters").getFormattedName(
            u.ownerContact,
          )),
          (a[13] = u.ownerContact),
          (a[14] = D))
        : (D = a[14]);
      var x = D,
        $;
      a[15] !== x || a[16] !== i || a[17] !== u.t
        ? (($ = i
            ? c.jsx("span", {
                children: s._(/*BTDS*/ "Suggested by {user-name}", [
                  s._param(
                    "user-name",
                    c.jsx(o("WAWebEmojiText.react").EmojiText, { text: x }),
                  ),
                ]),
              })
            : c.jsx("span", {
                children: o("WAWebClock").Clock.suggestedOnDateStr(u.t),
              })),
          (a[15] = x),
          (a[16] = i),
          (a[17] = u.t),
          (a[18] = $))
        : ($ = a[18]);
      var P = $,
        N;
      a[19] !== u.desc
        ? ((N =
            u.desc != null
              ? { title: s._(/*BTDS*/ "Group description"), content: u.desc }
              : void 0),
          (a[19] = u.desc),
          (a[20] = N))
        : (N = a[20]);
      var M = N,
        w;
      a[21] !== u.participantCount
        ? ((w =
            u.participantCount != null
              ? {
                  text: s._(
                    /*BTDS*/ '_j{"*":"{participant-count} members","_1":"1 member"}',
                    [s._plural(u.participantCount, "participant-count")],
                  ),
                  Icon: o("WAWebPeopleIcon.react").PeopleIcon,
                }
              : void 0),
          (a[21] = u.participantCount),
          (a[22] = w))
        : (w = a[22]);
      var A = w,
        F;
      a[23] !== u.hiddenSubgroup
        ? ((F =
            u.hiddenSubgroup === !0
              ? {
                  text: s._(/*BTDS*/ "Group visibility is set to hidden"),
                  Icon: r("WDSIconIcVisibilityOff.react"),
                }
              : void 0),
          (a[23] = u.hiddenSubgroup),
          (a[24] = F))
        : (F = a[24]);
      var O = F,
        B;
      if (C) {
        var W;
        a[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((W = function () {
              b(null);
            }),
            (a[25] = W))
          : (W = a[25]);
        var q;
        (a[26] !== C
          ? ((q = c.jsx(o("WAWebUimUie.react").UIE, {
              displayName: "SubgroupSuggestionContextMenu",
              escapable: !0,
              popable: !0,
              dismissOnWindowResize: !0,
              requestDismiss: W,
              children: c.jsx(r("WAWebUimUieMenu.react"), { contextMenu: C }),
            })),
            (a[26] = C),
            (a[27] = q))
          : (q = a[27]),
          (B = q));
      }
      var U;
      a[28] !== u.groupId
        ? ((U = c.jsx(o("WAWebDetailImage.react").DetailImage, {
            size: o("WAWebDetailImage.react").DetailImageSize.Small,
            id: u.groupId,
          })),
          (a[28] = u.groupId),
          (a[29] = U))
        : (U = a[29]);
      var V;
      a[30] !== u.subject
        ? ((V = c.jsx(o("WAWebEmojiText.react").EmojiText, {
            text: u.subject,
            xstyle: m.text,
          })),
          (a[30] = u.subject),
          (a[31] = V))
        : (V = a[31]);
      var H;
      a[32] !== O || a[33] !== A
        ? ((H = [A, O].filter(Boolean)), (a[32] = O), (a[33] = A), (a[34] = H))
        : (H = a[34]);
      var G;
      a[35] !== M || a[36] !== H
        ? ((G = { description: M, customSignals: H }),
          (a[35] = M),
          (a[36] = H),
          (a[37] = G))
        : (G = a[37]);
      var z;
      a[38] !== k || a[39] !== i
        ? ((z = i
            ? function (e) {
                k(e, o("WAWebCellRequestState").State.Approved);
              }
            : void 0),
          (a[38] = k),
          (a[39] = i),
          (a[40] = z))
        : (z = a[40]);
      var j;
      a[41] !== k || a[42] !== i
        ? ((j = function (t) {
            i
              ? k(t, o("WAWebCellRequestState").State.Rejected)
              : k(t, o("WAWebCellRequestState").State.Canceled);
          }),
          (a[41] = k),
          (a[42] = i),
          (a[43] = j))
        : (j = a[43]);
      var K;
      a[44] !== L || a[45] !== S
        ? ((K = !S && { onClick: L, hoverEnabled: !0 }),
          (a[44] = L),
          (a[45] = S),
          (a[46] = K))
        : (K = a[46]);
      var Q;
      a[47] !== P ||
      a[48] !== T ||
      a[49] !== g ||
      a[50] !== U ||
      a[51] !== V ||
      a[52] !== G ||
      a[53] !== z ||
      a[54] !== j ||
      a[55] !== K
        ? ((Q = c.jsx(
            r("WAWebCellRequest.react"),
            babelHelpers.extends(
              {
                image: U,
                primary: V,
                secondary: P,
                secondaryTestId: "suggestion-subtitle",
                signals: G,
                state: g,
                onApprove: z,
                onReject: j,
                onError: T,
              },
              K,
            ),
          )),
          (a[47] = P),
          (a[48] = T),
          (a[49] = g),
          (a[50] = U),
          (a[51] = V),
          (a[52] = G),
          (a[53] = z),
          (a[54] = j),
          (a[55] = K),
          (a[56] = Q))
        : (Q = a[56]);
      var X;
      return (
        a[57] !== Q || a[58] !== B
          ? ((X = c.jsxs(c.Fragment, { children: [Q, B] })),
            (a[57] = Q),
            (a[58] = B),
            (a[59] = X))
          : (X = a[59]),
        X
      );
    }
    l.default = p;
  },
  226,
);
