__d(
  "WAWebVcardConfirmModal.react",
  [
    "fbt",
    "WAWebApiContact",
    "WAWebChatFlowTypes",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebDrawerHeader.react",
    "WAWebEmojiText.react",
    "WAWebFocusTracer",
    "WAWebFrontendChatGetters",
    "WAWebFrontendContactGetters",
    "WAWebFrontendVcardUtils",
    "WAWebKeyboardHotKeys.react",
    "WAWebKeyboardTabUtils",
    "WAWebModal.react",
    "WAWebUsernameGatingUtils",
    "WAWebVcardModalDetails.react",
    "WAWebVcardParsingUtils",
    "WAWebWdsIcSendFilledIcon.react",
    "WAWebWidFactory",
    "WDSButton.react",
    "isStringNullOrEmpty",
    "react",
    "react-compiler-runtime",
    "useMergeRefs",
    "useWAWebChatValues",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useEffect,
      p = d.useRef,
      _ = d.useState;
    function f(e) {
      var t = o("react-compiler-runtime").c(23),
        n = e.contact,
        a = e.options,
        i = e.setOptions,
        l,
        s,
        u,
        d,
        m;
      if (t[0] !== n || t[1] !== a || t[2] !== i) {
        m = Symbol.for("react.early_return_sentinel");
        e: {
          var p = o("WAWebVcardParsingUtils").parseVcard(
            o("WAWebFrontendVcardUtils").vcardFromContactModel(n).vcard,
          );
          if (!p) {
            m = null;
            break e;
          }
          if (o("WAWebUsernameGatingUtils").usernameContactUiVcardEnabled()) {
            var _;
            t[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = { className: "x1n2onr6 xyorhqc x1280gxy x1bnvlk4" }),
                (t[8] = _))
              : (_ = t[8]);
            var f, g;
            (t[9] !== a || t[10] !== i
              ? ((f = function () {
                  var e = babelHelpers.extends({}, a);
                  ((e.includePhoneNumber = !e.includePhoneNumber), i(e));
                }),
                (g = function () {
                  var e = babelHelpers.extends({}, a);
                  ((e.includeUsername = !e.includeUsername), i(e));
                }),
                (t[9] = a),
                (t[10] = i),
                (t[11] = f),
                (t[12] = g))
              : ((f = t[11]), (g = t[12])),
              (m = c.jsx(
                "div",
                babelHelpers.extends({}, _, {
                  children: c.jsx(r("WAWebVcardModalDetails.react"), {
                    parsedVcard: p,
                    thumbnail: o("WAWebVcardParsingUtils").vcardThumbnail(p),
                    username: n.username,
                    includePhoneNumber: a.includePhoneNumber,
                    includeUsername: a.includeUsername,
                    onTogglePhoneNumber: f,
                    onToggleUsername: g,
                  }),
                }),
              )));
            break e;
          }
          (t[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = { className: "x1n2onr6 xyorhqc x1280gxy x1bnvlk4" }),
              (t[13] = d))
            : (d = t[13]),
            (l = r("WAWebVcardModalDetails.react")),
            (s = p),
            (u = o("WAWebVcardParsingUtils").vcardThumbnail(p)));
        }
        ((t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s),
          (t[5] = u),
          (t[6] = d),
          (t[7] = m));
      } else ((l = t[3]), (s = t[4]), (u = t[5]), (d = t[6]), (m = t[7]));
      if (m !== Symbol.for("react.early_return_sentinel")) return m;
      var h;
      t[14] !== l ||
      t[15] !== a.includePhoneNumber ||
      t[16] !== a.includeUsername ||
      t[17] !== s ||
      t[18] !== u
        ? ((h = c.jsx(l, {
            parsedVcard: s,
            thumbnail: u,
            includePhoneNumber: a.includePhoneNumber,
            includeUsername: a.includeUsername,
          })),
          (t[14] = l),
          (t[15] = a.includePhoneNumber),
          (t[16] = a.includeUsername),
          (t[17] = s),
          (t[18] = u),
          (t[19] = h))
        : (h = t[19]);
      var y;
      return (
        t[20] !== d || t[21] !== h
          ? ((y = c.jsx("div", babelHelpers.extends({}, d, { children: h }))),
            (t[20] = d),
            (t[21] = h),
            (t[22] = y))
          : (y = t[22]),
        y
      );
    }
    function g(t) {
      var n = o("react-compiler-runtime").c(48),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = p(null),
        u = r("useMergeRefs")(i, l),
        d = a,
        g = d.chat,
        C = d.contactList,
        b = d.onBack,
        v = d.onSend,
        S;
      n[3] !== C
        ? ((S = function () {
            return C.map(y);
          }),
          (n[3] = C),
          (n[4] = S))
        : (S = n[4]);
      var R = _(S),
        L = R[0],
        E = R[1],
        k,
        I;
      (n[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function () {
            var e = l.current;
            if (e != null) {
              var t = o("WAWebKeyboardTabUtils").getNextTabbableElement(
                e,
                o("WAWebKeyboardTabUtils").TabDirection.FORWARD,
                o("WAWebKeyboardTabUtils").FocusType.CUSTOM,
              );
              t != null && r("WAWebFocusTracer").focus(t);
            }
          }),
          (I = []),
          (n[5] = k),
          (n[6] = I))
        : ((k = n[5]), (I = n[6])),
        m(k, I));
      var T;
      n[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((T = [o("WAWebFrontendChatGetters").getKind]), (n[7] = T))
        : (T = n[7]);
      var D = o("useWAWebChatValues").useChatValues(g.id, T),
        x = D[0],
        $;
      if (x != null)
        e: switch (x) {
          case o("WAWebChatFlowTypes").ChatKindType.Chat: {
            var P;
            (n[8] !== g || n[9] !== C.length
              ? ((P = s._(
                  /*BTDS*/ '_j{"*":"Send {count} contacts to \\"{chat}\\"?","_1":"Send 1 contact to \\"{chat}\\"?"}',
                  [s._plural(C.length, "count"), s._param("chat", g.title())],
                )),
                (n[8] = g),
                (n[9] = C.length),
                (n[10] = P))
              : (P = n[10]),
              ($ = P));
            break e;
          }
          case o("WAWebChatFlowTypes").ChatKindType.Group: {
            var N;
            (n[11] !== g || n[12] !== C.length
              ? ((N = s._(
                  /*BTDS*/ '_j{"*":"Send {count} contacts to \\"{chat}\\"?","_1":"Send 1 contact to \\"{chat}\\"?"}',
                  [s._plural(C.length, "count"), s._param("chat", g.title())],
                )),
                (n[11] = g),
                (n[12] = C.length),
                (n[13] = N))
              : (N = n[13]),
              ($ = N));
            break e;
          }
          case o("WAWebChatFlowTypes").ChatKindType.Broadcast: {
            var M;
            (n[14] !== g || n[15] !== C.length
              ? ((M = s._(
                  /*BTDS*/ '_j{"*":"Send {count} contacts to \\"{chat}\\"?","_1":"Send 1 contact to \\"{chat}\\"?"}',
                  [s._plural(C.length, "count"), s._param("chat", g.title())],
                )),
                (n[14] = g),
                (n[15] = C.length),
                (n[16] = M))
              : (M = n[16]),
              ($ = M));
            break e;
          }
          case o("WAWebChatFlowTypes").ChatKindType.Community:
          case o("WAWebChatFlowTypes").ChatKindType.Newsletter:
        }
      var w;
      n[17] !== $
        ? ((w =
            $ != null
              ? c.jsx(o("WAWebEmojiText.react").EmojiText, {
                  text: $,
                  direction: "auto",
                  titlify: !0,
                  ellipsify: !0,
                })
              : null),
          (n[17] = $),
          (n[18] = w))
        : (w = n[18]);
      var A = w,
        F;
      n[19] !== L ? ((F = L.some(h)), (n[19] = L), (n[20] = F)) : (F = n[20]);
      var O = F,
        B;
      n[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = s._(/*BTDS*/ "Send contacts")), (n[21] = B))
        : (B = n[21]);
      var W = B,
        q;
      n[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = {
            className: "xvjzkt9 xh8yej3 x78zum5 x13a6bvl xwvwv9b x12xzxwr",
          }),
          (n[22] = q))
        : (q = n[22]);
      var U;
      n[23] !== L || n[24] !== v
        ? ((U = function () {
            v(L);
          }),
          (n[23] = L),
          (n[24] = v),
          (n[25] = U))
        : (U = n[25]);
      var V;
      n[26] !== O || n[27] !== U
        ? ((V = c.jsx(
            "div",
            babelHelpers.extends({}, q, {
              children: c.jsx(r("WDSButton.react"), {
                size: "large",
                variant: "filled",
                Icon: o("WAWebWdsIcSendFilledIcon.react").WdsIcSendFilledIcon,
                disabled: O,
                "aria-label": W,
                onPress: U,
              }),
            }),
          )),
          (n[26] = O),
          (n[27] = U),
          (n[28] = V))
        : (V = n[28]);
      var H = V,
        G;
      n[29] === Symbol.for("react.memo_cache_sentinel")
        ? ((G = { surface: "unknown", viewName: "vcard-confirm" }), (n[29] = G))
        : (G = n[29]);
      var z;
      n[30] !== b || n[31] !== A
        ? ((z = c.jsx(o("WAWebDrawerHeader.react").DrawerHeader, {
            type: o("WAWebDrawerHeader.react").DRAWER_HEADER_TYPE.POPUP,
            onBack: b,
            children: A,
          })),
          (n[30] = b),
          (n[31] = A),
          (n[32] = z))
        : (z = n[32]);
      var j;
      n[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = { className: "x889kno" }), (n[33] = j))
        : (j = n[33]);
      var K;
      if (n[34] !== C || n[35] !== L) {
        var Q;
        (n[37] !== L
          ? ((Q = function (t, n) {
              var e = function (t) {
                E(function (e) {
                  var r = [].concat(e);
                  return ((r[n] = t), r);
                });
              };
              return c.jsx(
                f,
                { contact: t, options: L[n], setOptions: e },
                n.toString(),
              );
            }),
            (n[37] = L),
            (n[38] = Q))
          : (Q = n[38]),
          (K = C.map(Q)),
          (n[34] = C),
          (n[35] = L),
          (n[36] = K));
      } else K = n[36];
      var X;
      n[39] !== K
        ? ((X = c.jsx(r("WAWebDrawerBody.react"), {
            children: c.jsx(o("WAWebKeyboardHotKeys.react").HotKeys, {
              children: c.jsx(
                "div",
                babelHelpers.extends({}, j, { children: K }),
              ),
            }),
          })),
          (n[39] = K),
          (n[40] = X))
        : (X = n[40]);
      var Y;
      n[41] !== H || n[42] !== z || n[43] !== X
        ? ((Y = c.jsxs(r("WAWebDrawer.react"), {
            tsNavigationData: G,
            children: [z, X, H],
          })),
          (n[41] = H),
          (n[42] = z),
          (n[43] = X),
          (n[44] = Y))
        : (Y = n[44]);
      var J;
      return (
        n[45] !== u || n[46] !== Y
          ? ((J = c.jsx(o("WAWebModal.react").Modal, {
              ref: u,
              type: o("WAWebModal.react").ModalTheme.Box,
              children: Y,
            })),
            (n[45] = u),
            (n[46] = Y),
            (n[47] = J))
          : (J = n[47]),
        J
      );
    }
    function h(e) {
      return !e.includePhoneNumber && !e.includeUsername;
    }
    function y(e) {
      return {
        includePhoneNumber:
          e.id.isRegularUserPn() ||
          o("WAWebApiContact").getPhoneNumber(
            o("WAWebWidFactory").asUserLidOrThrow(e.id),
          ) != null,
        includeUsername: !r("isStringNullOrEmpty")(
          o("WAWebFrontendContactGetters").getUsername(e),
        ),
      };
    }
    l.default = g;
  },
  226,
);
