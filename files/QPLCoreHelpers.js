__d(
  "QPLCoreHelpers",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e, t, n, r, o, a, i) {
      var l,
        s,
        u,
        c = "unreliable";
      o != null && (c += "_" + o);
      var d = {
        string:
          ((l = {}),
          (l.join_id = e),
          (l.qpl_join__source_clock = c),
          (l.qpl__source = "client_js"),
          l),
        int: ((s = {}), (s.qpl_join__absolute_time_origin_ms = t), s),
        bool: ((u = {}), (u.qpl_join__source_is_primary = n), u),
      };
      if (
        (r != null &&
          d.int &&
          (d.int.qpl_join__close_session_after_seconds = r),
        a != null)
      ) {
        var m;
        d.string_array = ((m = {}), (m.qpl_join__namespaces = a), m);
      }
      return (i != null && d.int && (d.int.qpl_join__action_priority = i), d);
    }
    function l(e) {
      switch (e) {
        case 1:
          return "join_request_";
        case 0:
          return "join_request_";
        case 3:
          return "join_response_";
        case 2:
          return "join_response_";
        default:
          return null;
      }
    }
    function s(e, t) {
      var n = l(e);
      return n == null ? null : n + t;
    }
    ((i.generateJoinAnnotations = e),
      (i.getAlignmentPointNamePrefix = l),
      (i.getAlignmentPointName = s));
  },
  66,
);
