__d(
  "MercuryAssert",
  ["MercuryIDs", "err"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e == null) throw r("err")("participant_id null/undefined");
      if (!o("MercuryIDs").isValid(e))
        throw r("err")("bad_participant_id " + e);
    }
    function s(t) {
      t.forEach(e);
    }
    function u(e) {
      var t = o("MercuryIDs").tokenize(e);
      if (e == null) throw r("err")("participant_id null/undefined");
      if (t.type != "fbid") throw r("err")("bad_user_id " + e);
    }
    function c(e) {
      var t = o("MercuryIDs").tokenize(e);
      if (e == null) throw r("err")("participant_id null/undefined");
      if (t.type != "email") throw r("err")("bad_email_id " + e);
    }
    function d(e) {
      e.forEach(m);
    }
    function m(e) {
      if (e == null) throw r("err")("participant_id null/undefined");
      if (!o("MercuryIDs").isValid(e)) throw r("err")("bad_thread_id " + e);
    }
    ((l.isParticipantID = e),
      (l.allParticipantIDs = s),
      (l.isUserParticipantID = u),
      (l.isEmailParticipantID = c),
      (l.allThreadID = d),
      (l.isThreadID = m));
  },
  98,
);
