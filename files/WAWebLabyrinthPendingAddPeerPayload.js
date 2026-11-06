__d(
  "WAWebLabyrinthPendingAddPeerPayload",
  [],
  function (t, n, r, o, a, i) {
    var e = null;
    function l(t) {
      e = t;
    }
    function s() {
      return e != null;
    }
    function u() {
      var t = e;
      return ((e = null), t);
    }
    function c(t) {
      e != null || (e = t);
    }
    ((i.holdAddPeerPayload = l),
      (i.hasAddPeerPayload = s),
      (i.takeAddPeerPayload = u),
      (i.putBackAddPeerPayload = c));
  },
  66,
);
