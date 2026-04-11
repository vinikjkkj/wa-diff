__d(
  "WAWebNewsletterEnforcementAlertModelUtils",
  ["WAWebCommonNewsletterEnums", "WAWebWidFactory"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e === o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS
        ? "STATUS"
        : "MESSAGE";
    }
    function s(e, t, n) {
      var r,
        a =
          e.contentType ===
          o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS
            ? n
            : t;
      return {
        serverId: e.serverId,
        msgData:
          (r = a == null ? void 0 : a.get(e.serverId)) != null ? r : null,
      };
    }
    function u(t, n, r, a) {
      var i = [],
        l;
      return (
        t == null ||
          t.map(function (t) {
            var s,
              u,
              c,
              d =
                (s = t.enforcementExtraData) == null
                  ? void 0
                  : s.enforcementTargetData,
              m = (u = d == null ? void 0 : d.serverId) != null ? u : null,
              p =
                (d == null ? void 0 : d.contentType) ===
                o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS
                  ? r
                  : n,
              _ =
                m != null && (c = p == null ? void 0 : p.get(m)) != null
                  ? c
                  : null,
              f = new Map(),
              g = {
                id: t.enforcementId,
                chatId: o("WAWebWidFactory").createWid(a),
                enforcementViolationCategory: t.enforcementViolationCategory,
                enforcementType: t.enforcementType,
                enforcementId: t.enforcementId,
                enforcementExtraData: t.enforcementExtraData,
                enforcementPolicyInformation: t.enforcementPolicyInformation,
                enforcementSource: t.enforcementSource,
                appealCreationTime: t.appealCreationTime,
                appealState: t.appealState,
                appealReason: null,
                countryCode: null,
                lastUpdated: Date.now(),
                msgData: _,
                violatingContentData:
                  d != null
                    ? { contentType: d.contentType, serverId: d.serverId }
                    : null,
              };
            if (m != null && _ != null) {
              var h,
                y = e(
                  (h = d == null ? void 0 : d.contentType) != null
                    ? h
                    : o("WAWebCommonNewsletterEnums").ViolatingContentType
                        .MESSAGE,
                );
              f.set(y + "_" + m, g);
            }
            ((l = {
              id: t.enforcementId,
              chatId: o("WAWebWidFactory").createWid(a),
              enforcementCreationTime: t.enforcementCreationTime,
              enforcementViolationCategory: t.enforcementViolationCategory,
              enforcementType: t.enforcementType,
              enforcementId: t.enforcementId,
              enforcementExtraData: t.enforcementExtraData,
              enforcementPolicyInformation: t.enforcementPolicyInformation,
              targetMsgMapForEvidence: f,
              lastUpdated: Date.now(),
              enforcementSource: t.enforcementSource,
              countryCodes: [],
              appeal: g,
            }),
              i.push(l));
          }),
        i
      );
    }
    function c(t, n, r, a) {
      var i = new Map();
      t.map(function (t) {
        var l = t.violatingContentData,
          u = s(l, n, r),
          c = u.msgData,
          d = u.serverId,
          m = {
            id: t.enforcementId,
            chatId: o("WAWebWidFactory").createWid(a),
            enforcementViolationCategory: t.enforcementViolationCategory,
            enforcementType: t.enforcementType,
            enforcementId: t.enforcementId,
            enforcementExtraData: t.enforcementExtraData,
            enforcementPolicyInformation: t.enforcementPolicyInformation,
            enforcementSource: t.enforcementSource,
            appealCreationTime: t.appealCreationTime,
            appealState: t.appealState,
            appealReason: null,
            countryCode: null,
            lastUpdated: Date.now(),
            msgData: c,
            violatingContentData: l,
          };
        i.set(e(l.contentType) + "_" + d, m);
      });
      var l = t[0];
      if (l == null) return null;
      var u = l.violatingContentData,
        c = s(u, n, r),
        d = c.msgData;
      return {
        id: l.enforcementId,
        chatId: o("WAWebWidFactory").createWid(a),
        enforcementCreationTime: l.enforcementCreationTime,
        enforcementViolationCategory: l.enforcementViolationCategory,
        enforcementType: l.enforcementType,
        enforcementId: l.enforcementId,
        enforcementExtraData: l.enforcementExtraData,
        enforcementPolicyInformation: l.enforcementPolicyInformation,
        targetMsgMapForEvidence: i,
        lastUpdated: Date.now(),
        enforcementSource: l.enforcementSource,
        countryCodes: [],
        appeal: {
          id: l.enforcementId,
          chatId: o("WAWebWidFactory").createWid(a),
          enforcementViolationCategory: l.enforcementViolationCategory,
          enforcementType: l.enforcementType,
          enforcementId: l.enforcementId,
          enforcementExtraData: l.enforcementExtraData,
          enforcementPolicyInformation: l.enforcementPolicyInformation,
          enforcementSource: l.enforcementSource,
          appealCreationTime: l.appealCreationTime,
          appealState: l.appealState,
          appealReason: null,
          countryCode: null,
          lastUpdated: Date.now(),
          msgData: d,
          violatingContentData: u,
        },
      };
    }
    function d(e, t) {
      var n = [],
        r;
      return (
        e == null ||
          e.map(function (e) {
            var a = {
              id: e.enforcementId,
              chatId: o("WAWebWidFactory").createWid(t),
              enforcementViolationCategory: e.enforcementViolationCategory,
              enforcementType: e.enforcementType,
              enforcementId: e.enforcementId,
              enforcementExtraData: e.enforcementExtraData,
              enforcementPolicyInformation: e.enforcementPolicyInformation,
              enforcementSource: e.enforcementSource,
              appealCreationTime: e.appealCreationTime,
              appealState: e.appealState,
              appealReason: null,
              countryCode: null,
              lastUpdated: Date.now(),
              msgData: null,
              violatingContentData: null,
            };
            ((r = {
              id: e.enforcementId,
              chatId: o("WAWebWidFactory").createWid(t),
              enforcementCreationTime: e.enforcementCreationTime,
              enforcementViolationCategory: e.enforcementViolationCategory,
              enforcementType: e.enforcementType,
              enforcementId: e.enforcementId,
              enforcementExtraData: e.enforcementExtraData,
              enforcementPolicyInformation: e.enforcementPolicyInformation,
              targetMsgMapForEvidence: null,
              lastUpdated: Date.now(),
              enforcementSource: e.enforcementSource,
              countryCodes: [],
              appeal: a,
            }),
              n.push(r));
          }),
        n
      );
    }
    function m(t, n, r, a) {
      var i = [],
        l;
      return (
        t == null ||
          t.map(function (t) {
            var s,
              u,
              c,
              d =
                (s = t.enforcementExtraData) == null
                  ? void 0
                  : s.enforcementTargetData,
              m = (u = d == null ? void 0 : d.serverId) != null ? u : null,
              p =
                (d == null ? void 0 : d.contentType) ===
                o("WAWebCommonNewsletterEnums").ViolatingContentType.STATUS
                  ? r
                  : n,
              _ =
                m != null && (c = p == null ? void 0 : p.get(m)) != null
                  ? c
                  : null,
              f = new Map(),
              g = {
                id: t.enforcementId,
                chatId: o("WAWebWidFactory").createWid(a),
                enforcementViolationCategory: t.enforcementViolationCategory,
                enforcementType: t.enforcementType,
                enforcementId: t.enforcementId,
                enforcementExtraData: t.enforcementExtraData,
                enforcementPolicyInformation: t.enforcementPolicyInformation,
                enforcementSource: t.enforcementSource,
                appealCreationTime: t.appealCreationTime,
                appealState: t.appealState,
                appealReason: null,
                countryCode: t.countryCodes,
                lastUpdated: Date.now(),
                msgData: _,
                violatingContentData:
                  d != null
                    ? { contentType: d.contentType, serverId: d.serverId }
                    : null,
              };
            if (m != null && _ != null) {
              var h,
                y = e(
                  (h = d == null ? void 0 : d.contentType) != null
                    ? h
                    : o("WAWebCommonNewsletterEnums").ViolatingContentType
                        .MESSAGE,
                );
              f.set(y + "_" + m, g);
            }
            ((l = {
              id: t.enforcementId,
              chatId: o("WAWebWidFactory").createWid(a),
              enforcementCreationTime: t.enforcementCreationTime,
              enforcementViolationCategory: t.enforcementViolationCategory,
              enforcementType: t.enforcementType,
              enforcementId: t.enforcementId,
              enforcementExtraData: t.enforcementExtraData,
              enforcementPolicyInformation: t.enforcementPolicyInformation,
              targetMsgMapForEvidence: f,
              lastUpdated: Date.now(),
              enforcementSource: t.enforcementSource,
              countryCodes: t.countryCodes,
              appeal: g,
            }),
              i.push(l));
          }),
        i
      );
    }
    function p(e, t, n, r) {
      var o = [];
      if (
        ((e == null ? void 0 : e.suspensions) != null &&
          o.push.apply(o, u(e == null ? void 0 : e.suspensions, t, n, r)),
        (e == null ? void 0 : e.geoSuspensions) != null &&
          o.push.apply(o, m(e == null ? void 0 : e.geoSuspensions, t, n, r)),
        (e == null ? void 0 : e.profilePictureDeletions) != null &&
          o.push.apply(o, d(e == null ? void 0 : e.profilePictureDeletions, r)),
        (e == null ? void 0 : e.violatingMessages) != null)
      ) {
        var a = c(e == null ? void 0 : e.violatingMessages, t, n, r);
        a != null && o.push(a);
      }
      return o;
    }
    l.convertNewsletterBaseEnforcementTypeToNewsletterAlert = p;
  },
  98,
);
