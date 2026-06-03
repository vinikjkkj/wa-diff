__d(
  "WAWebGetPrioritizedCommonGroupsAction",
  [
    "WAWebFindCommonGroupsContactAction",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumHighlightGroupType",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield o(
            "WAWebFindCommonGroupsContactAction",
          ).findCommonGroups(e);
          if (t != null) {
            var n = Array.from(t.getModelsArray());
            return { commonGroups: t, priority: u(n) };
          }
        })),
        s.apply(this, arguments)
      );
    }
    function u(e) {
      if (e.length) {
        var t,
          n = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE.UNKNOWN,
          r = function (t) {
            return t.name != null && t.name !== "";
          },
          a = [],
          i = [],
          l = [],
          s = 0,
          u = [],
          c = 1 / 0,
          d = [];
        if (e.length > 1)
          (e.forEach(function (e) {
            var t, m, p, _, f;
            if (r(e)) {
              if (
                o("WAWebUserPrefsMeUser").isMeAccount(
                  (t = e.groupMetadata) == null ? void 0 : t.owner,
                )
              ) {
                (i.push(e),
                  (a = i),
                  (n = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE
                    .CREATOR));
                return;
              } else if (i.length) return;
              if (e.iAmAdmin()) {
                (l.push(e),
                  (a = l),
                  (n = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE
                    .ADMIN));
                return;
              } else if (l.length) return;
              var g =
                (m =
                  (p = e.groupMetadata) == null
                    ? void 0
                    : p.participants.getMyContacts().length) != null
                  ? m
                  : 0;
              if (g > 0 && g >= s) {
                (g > s ? (u = [e]) : g === s && u.push(e),
                  (s = g),
                  (a = u),
                  (n = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE
                    .SAVED_CONTACTS));
                return;
              } else if (u.length) return;
              var h =
                (_ =
                  (f = e.groupMetadata) == null
                    ? void 0
                    : f.participants.length) != null
                  ? _
                  : 0;
              if (h > 0 && h <= c) {
                (h < c ? (d = [e]) : h === c && d.push(e),
                  (c = h),
                  (a = d),
                  d.length === 1
                    ? (n = o("WAWebWamEnumHighlightGroupType")
                        .HIGHLIGHT_GROUP_TYPE.PARTICIPANTS)
                    : (n = o("WAWebWamEnumHighlightGroupType")
                        .HIGHLIGHT_GROUP_TYPE.MORE));
                return;
              }
            }
          }),
            a.length &&
              a.sort(function (e, t) {
                return e.t != null && (t == null ? void 0 : t.t) != null
                  ? e.t >= t.t
                    ? -1
                    : 1
                  : -1;
              }),
            (t = a[0]));
        else {
          var m = e[0];
          r(m) &&
            ((t = m),
            (n = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE
              .SINGLE));
        }
        return { group: t, wamEnum: n };
      }
    }
    ((l.getPrioritizedCommonGroups = e), (l.prioritizeGroups = u));
  },
  98,
);
