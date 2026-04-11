__d(
  "PinnedCommentEventsConnectionHandler",
  ["expectationViolation", "relay-runtime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.get(t.dataID);
      if (n) {
        var r = n.getLinkedRecords(t.fieldKey);
        if (!r) {
          n.setValue(null, t.handleKey);
          return;
        }
        var o = n.getLinkedRecords(t.handleKey);
        if (!o) {
          n.setLinkedRecords(r, t.handleKey);
          return;
        }
        var a;
        (o == null ? (a = r) : r == null ? (a = o) : (a = s(o, r)),
          n.setLinkedRecords(a != null ? a : [], t.handleKey));
      }
    }
    function s(e, t) {
      for (
        var n = 0,
          o = 0,
          a = new Set(),
          i = [],
          l = function (t) {
            var e = t == null ? void 0 : t.getValue("id");
            if (e == null) {
              r("expectationViolation")("Pinned Comment Event should have id");
              return;
            }
            a.has(e) || (a.add(e), i.push(t));
          };
        n < e.length && o < t.length;
      ) {
        var s,
          u,
          c = (s = e[n]) == null ? void 0 : s.getValue("vod_time_offset"),
          d = (u = t[o]) == null ? void 0 : u.getValue("vod_time_offset");
        if (typeof c != "number") {
          n++;
          continue;
        }
        if (typeof d != "number") {
          o++;
          continue;
        }
        if (c > d) {
          (l(e[n]), n++);
          continue;
        }
        if (c < d) {
          (l(t[o]), o++);
          continue;
        }
        (l(e[n]), l(t[o]), n++, o++);
      }
      for (var m = n; m < e.length; m++) l(e[m]);
      for (var p = o; p < t.length; p++) l(t[p]);
      return i;
    }
    function u(e) {
      return o("relay-runtime").getRelayHandleKey(
        "pinned_comment_events",
        e,
        null,
      );
    }
    function c(e, t, n) {
      var r;
      return (r = e.getLinkedRecords(u(t), n)) != null ? r : [];
    }
    function d(e, t, n, r) {
      e.setLinkedRecords(
        c(e, t, r).filter(function (e) {
          return (e == null ? void 0 : e.getValue("id")) !== n;
        }),
        u(t),
      );
    }
    ((l.update = e), (l.getEvents = c), (l.deleteEvent = d));
  },
  98,
);
