__d(
  "NFXContextFactory",
  ["FBLogger", "uuidv4"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = function (t, n) {
        if (n !== null) return n;
      };
      return JSON.stringify(
        {
          reportable_ent_token: e.reportable_ent_token,
          story_location: e.story_location,
          entry_point: e.entry_point,
          type: e.type,
          session_id: r("uuidv4")(),
          initial_action_name: e.initial_action_name,
          reportable_id: e.reportable_id,
          page_id: e.page_id,
          responsible_id: e.responsible_id,
        },
        t,
      );
    }
    function s(t) {
      var n = t.reportable_ent_token,
        r = t.story_location,
        o = t.entry_point,
        a = o === void 0 ? "unknown" : o,
        i = t.responsible_id;
      return e({
        type: 1,
        story_location: r,
        entry_point: a,
        reportable_ent_token: n,
        responsible_id: i,
      });
    }
    function u(t) {
      var n = t.page_id,
        r = t.reportable_id,
        o = t.storyLocation;
      return e({
        type: 6,
        story_location: o,
        entry_point: "unknown",
        initial_action_name: "POLITICAL_ARCHIVE_REPORT_AD",
        reportable_id: r,
        page_id: n,
      });
    }
    function c(t) {
      var n = t.reportable_ent_token,
        r = t.story_location,
        o = t.entry_point,
        a = o === void 0 ? "unknown" : o,
        i = t.initial_action_name,
        l = t.page_id;
      return e({
        type: 11,
        story_location: r,
        entry_point: a,
        reportable_ent_token: n,
        initial_action_name: i,
        page_id: l,
      });
    }
    function d(t) {
      var n = t.reportable_ent_token,
        o = t.story_location,
        a = t.entry_point,
        i = a === void 0 ? "unknown" : a,
        l = t.initial_action_name;
      return (
        n === null &&
          r("FBLogger")("frx").warn(
            "null or undefined reportable_ent_token in forEntReportable, location=%s entry_point=%s",
            o,
            i,
          ),
        e({
          type: 2,
          story_location: o,
          entry_point: i,
          reportable_ent_token: n,
          initial_action_name: l,
        })
      );
    }
    ((l.withEntMessageThread = s),
      (l.withPoliticalArchiveAds = u),
      (l.withEntReportableOnPage = c),
      (l.withEntReportable = d));
  },
  98,
);
