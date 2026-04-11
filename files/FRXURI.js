__d(
  "FRXURI",
  ["ActorURI", "NFXContextFactory", "XRapidReportingDialogController"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.reportable_ent_token,
        n = e.story_location,
        a = e.entry_point,
        i = a === void 0 ? "unknown" : a,
        l = e.responsible_id,
        s = e.actor_id,
        u = o("NFXContextFactory").withEntMessageThread({
          reportable_ent_token: t,
          story_location: n,
          entry_point: i,
          responsible_id: l,
        }),
        c = r("XRapidReportingDialogController")
          .getURIBuilder()
          .setString("context", u)
          .getURI();
      return (s != null && (c = o("ActorURI").create(c, s)), c);
    }
    function s(e) {
      var t = e.reportable_ent_token,
        n = e.story_location,
        a = e.entry_point,
        i = a === void 0 ? "unknown" : a,
        l = e.initial_action_name,
        s = e.actor_id,
        u = e.page_id,
        c = o("NFXContextFactory").withEntReportableOnPage({
          reportable_ent_token: t,
          story_location: n,
          entry_point: i,
          initial_action_name: l,
          page_id: u,
        }),
        d = r("XRapidReportingDialogController")
          .getURIBuilder()
          .setString("context", c)
          .getURI();
      return (s != null && (d = o("ActorURI").create(d, s)), d);
    }
    function u(e) {
      var t = e.reportable_ent_token,
        n = e.story_location,
        a = e.entry_point,
        i = a === void 0 ? "unknown" : a,
        l = e.initial_action_name,
        s = e.actor_id,
        u = o("NFXContextFactory").withEntReportable({
          reportable_ent_token: t,
          story_location: n,
          entry_point: i,
          initial_action_name: l,
        }),
        c = r("XRapidReportingDialogController")
          .getURIBuilder()
          .setString("context", u)
          .getURI();
      return (s != null && (c = o("ActorURI").create(c, s)), c);
    }
    function c(e, t) {
      return btoa(e + ":" + t);
    }
    ((l.withEntMessageThread = e),
      (l.withEntReportableOnPage = s),
      (l.withEntReportable = u),
      (l.getReportableToken = c));
  },
  98,
);
