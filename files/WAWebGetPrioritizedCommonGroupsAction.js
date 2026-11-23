__d(
  "WAWebGetPrioritizedCommonGroupsAction",
  [
    "WAWebFindCommonGroupsContactAction",
    "WAWebUserUtils",
    "WAWebWamEnumHighlightGroupType",
  ],
  function (t, n, r, o, a, i, l) {
    async function e(e) {
      var t = await o("WAWebFindCommonGroupsContactAction").findCommonGroups(e);
      if (t != null) {
        var n = Array.from(t.getModelsArray());
        return { commonGroups: t, priority: u(n) };
      }
    }
    function s(e) {
      return [e.name, e.formattedTitle].find(function (e) {
        return e != null && e !== "";
      });
    }
    function u(e) {
      if (e.length) {
        var t,
          n = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE.UNKNOWN,
          r = function (t) {
            return s(t) != null;
          },
          a = [],
          i = [],
          l = [],
          u = 0,
          c = [],
          d = 1 / 0,
          m = [];
        if (e.length > 1)
          (e.forEach(function (e) {
            var t, s, p, _, f;
            if (r(e)) {
              if (
                o("WAWebUserUtils").isMeAccount(
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
                (s =
                  (p = e.groupMetadata) == null
                    ? void 0
                    : p.participants.getMyContacts().length) != null
                  ? s
                  : 0;
              if (g > 0 && g >= u) {
                (g > u ? (c = [e]) : g === u && c.push(e),
                  (u = g),
                  (a = c),
                  (n = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE
                    .SAVED_CONTACTS));
                return;
              } else if (c.length) return;
              var h =
                (_ =
                  (f = e.groupMetadata) == null
                    ? void 0
                    : f.participants.length) != null
                  ? _
                  : 0;
              if (h > 0 && h <= d) {
                (h < d ? (m = [e]) : h === d && m.push(e),
                  (d = h),
                  (a = m),
                  m.length === 1
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
          var p = e[0];
          r(p) &&
            ((t = p),
            (n = o("WAWebWamEnumHighlightGroupType").HIGHLIGHT_GROUP_TYPE
              .SINGLE));
        }
        return { group: t, wamEnum: n };
      }
    }
    ((l.getPrioritizedCommonGroups = e),
      (l.getCommonGroupTitle = s),
      (l.prioritizeGroups = u));
  },
  98,
);
