__d(
  "WAWebBizBroadcastsUpsertAudienceScreen.react",
  [
    "WAJids",
    "WAWebBizBroadcastsRecipientUtils",
    "WAWebBizBroadcastsSelectedRecipientsSection.react",
    "WAWebBizBroadcastsUpsertAudienceHeader.react",
    "WAWebBizBroadcastsUpsertAudienceList.react",
    "WAWebBizBroadcastsUpsertAudienceSaveButton.react",
    "WAWebBizTwoColumnLayout.react",
    "WAWebBroadcastAudienceNameFieldCard.react",
    "WAWebBroadcastConsts",
    "WAWebBusinessBroadcastUserJourneyLogger",
    "WAWebDrawer.react",
    "WAWebDrawerBody.react",
    "WAWebFrontendContactGetters",
    "WAWebWidToJid",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useCallback,
      d = u.useEffect,
      m = u.useMemo,
      p = u.useState,
      _ = {
        container: { marginInlineStart: "x1sbwfh8", $$css: !0 },
        drawerBody: { backgroundColor: "x1h3rtpe", $$css: !0 },
      };
    function f(e) {
      var t = o("react-compiler-runtime").c(54),
        n = e.chat,
        a = e.entryPoint,
        i = e.isBBCreationFlow,
        l = e.onBack,
        u = e.onNewAudienceSuccess,
        c = e.onSendBroadcast,
        m = e.onUpdateAudienceSuccess,
        f = e.suggestedAudienceData,
        y = i === void 0 ? !1 : i,
        C;
      if (t[0] !== n) {
        var b;
        ((C =
          (n != null && ((b = n.contact.name) == null ? void 0 : b.trim())) ||
          ""),
          (t[0] = n),
          (t[1] = C));
      } else C = t[1];
      var v = C,
        S;
      if (t[2] !== n || t[3] !== (f == null ? void 0 : f.initialRecipientIds)) {
        var R;
        ((S =
          n != null
            ? (R = n.broadcastMetadata) == null || (R = R.recipients) == null
              ? void 0
              : R.map(h)
            : f == null
              ? void 0
              : f.initialRecipientIds),
          (t[2] = n),
          (t[3] = f == null ? void 0 : f.initialRecipientIds),
          (t[4] = S));
      } else S = t[4];
      var L = S,
        E;
      t[5] !== n
        ? ((E = n != null ? o("WAWebWidToJid").widToBroadcastJid(n.id) : null),
          (t[5] = n),
          (t[6] = E))
        : (E = t[6]);
      var k = E,
        I,
        T;
      (t[7] !== a
        ? ((I = function () {
            o(
              "WAWebBusinessBroadcastUserJourneyLogger",
            ).BusinessBroadcastUserJourneyLogger.createAudienceViewed(a);
          }),
          (T = [a]),
          (t[7] = a),
          (t[8] = I),
          (t[9] = T))
        : ((I = t[8]), (T = t[9])),
        d(I, T));
      var D = p(v),
        x = D[0],
        $ = D[1],
        P;
      t[10] !== L ? ((P = new Set(L)), (t[10] = L), (t[11] = P)) : (P = t[11]);
      var N = p(P),
        M = N[0],
        w = N[1],
        A = g,
        F;
      t[12] !== L
        ? ((F = L != null ? L : []), (t[12] = L), (t[13] = F))
        : (F = t[13]);
      var O;
      t[14] !== F ? ((O = A(F)), (t[14] = F), (t[15] = O)) : (O = t[15]);
      var B = O,
        W;
      t[16] !== M
        ? ((W = A(Array.from(M))), (t[16] = M), (t[17] = W))
        : (W = t[17]);
      var q = W,
        U = M.size < o("WAWebBroadcastConsts").MIN_BROADCAST_RECIPIENTS;
      f == null || f.suggestedAudienceCardId;
      var V = f == null ? void 0 : f.suggestedAudienceCardId,
        H;
      t[18] !== a || t[19] !== V
        ? ((H = { entryPoint: a, suggestedAudienceCardId: V }),
          (t[18] = a),
          (t[19] = V),
          (t[20] = H))
        : (H = t[20]);
      var G = H,
        z = n != null,
        j;
      t[21] !== a || t[22] !== l || t[23] !== z
        ? ((j = s.jsx(r("WAWebBizBroadcastsUpsertAudienceHeader.react"), {
            entryPoint: a,
            isEdit: z,
            onBack: l,
          })),
          (t[21] = a),
          (t[22] = l),
          (t[23] = z),
          (t[24] = j))
        : (j = t[24]);
      var K;
      t[25] !== a || t[26] !== M
        ? ((K = s.jsx(r("WAWebBizBroadcastsUpsertAudienceList.react"), {
            entryPoint: a,
            selectedRecipientIds: M,
            setSelectedRecipientIds: w,
          })),
          (t[25] = a),
          (t[26] = M),
          (t[27] = K))
        : (K = t[27]);
      var Q;
      t[28] !== x
        ? ((Q = s.jsx(r("WAWebBroadcastAudienceNameFieldCard.react"), {
            onValueChange: $,
            value: x,
            testid: void 0,
          })),
          (t[28] = x),
          (t[29] = Q))
        : (Q = t[29]);
      var X;
      t[30] !== M
        ? ((X =
            M.size > 0 &&
            s.jsx(r("WAWebBizBroadcastsSelectedRecipientsSection.react"), {
              selectedRecipientIds: M,
              setSelectedRecipientIds: w,
            })),
          (t[30] = M),
          (t[31] = X))
        : (X = t[31]);
      var Y;
      t[32] !== Q || t[33] !== X
        ? ((Y = s.jsxs(s.Fragment, { children: [Q, X] })),
          (t[32] = Q),
          (t[33] = X),
          (t[34] = Y))
        : (Y = t[34]);
      var J;
      t[35] !== K || t[36] !== Y
        ? ((J = s.jsx(r("WAWebDrawerBody.react"), {
            xstyle: _.drawerBody,
            children: s.jsx(r("WAWebBizTwoColumnLayout.react"), {
              flipResizeOrder: !0,
              primaryContent: K,
              secondaryContent: Y,
            }),
          })),
          (t[35] = K),
          (t[36] = Y),
          (t[37] = J))
        : (J = t[37]);
      var Z;
      t[38] !== x ||
      t[39] !== k ||
      t[40] !== v ||
      t[41] !== B ||
      t[42] !== y ||
      t[43] !== U ||
      t[44] !== G ||
      t[45] !== u ||
      t[46] !== c ||
      t[47] !== m ||
      t[48] !== q
        ? ((Z = s.jsx(r("WAWebBizBroadcastsUpsertAudienceSaveButton.react"), {
            broadcastJid: k,
            contacts: q,
            broadcastListName: x,
            isBBCreationFlow: y,
            isDisabled: U,
            onCreateAudienceSuccess: u,
            onSendBroadcast: c,
            onUpdateAudienceSuccess: m,
            originalAudienceName: v,
            originalRecipientContactData: B,
            loggingContext: G,
          })),
          (t[38] = x),
          (t[39] = k),
          (t[40] = v),
          (t[41] = B),
          (t[42] = y),
          (t[43] = U),
          (t[44] = G),
          (t[45] = u),
          (t[46] = c),
          (t[47] = m),
          (t[48] = q),
          (t[49] = Z))
        : (Z = t[49]);
      var ee;
      return (
        t[50] !== j || t[51] !== J || t[52] !== Z
          ? ((ee = s.jsxs(r("WAWebDrawer.react"), {
              testid: void 0,
              xstyle: _.container,
              children: [j, J, Z],
            })),
            (t[50] = j),
            (t[51] = J),
            (t[52] = Z),
            (t[53] = ee))
          : (ee = t[53]),
        ee
      );
    }
    function g(e) {
      var t = [];
      for (var n of e)
        if (n !== "") {
          var r = o("WAWebBizBroadcastsRecipientUtils").getContactByUserId(n);
          r != null &&
            t.push({
              lid: o("WAJids").toLidUserJid(n),
              phone: o("WAWebFrontendContactGetters").getFormattedPhoneAndType(
                r,
              ).displayName,
            });
        }
      return t;
    }
    function h(e) {
      return e.id.user;
    }
    l.default = f;
  },
  98,
);
