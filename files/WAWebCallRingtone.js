__d(
  "WAWebCallRingtone",
  [
    "WAWebAuraRingtonePlayback",
    "WAWebCallCollection",
    "WAWebNoop",
    "WAWebVoipWaCallEnums",
  ],
  function (t, n, r, o, a, i, l) {
    var e = 0,
      s = -1,
      u = null,
      c = null;
    function d() {
      var e = r("WAWebCallCollection").activeCall;
      if (e == null) return !1;
      var t = e.getState();
      return (
        t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
        t === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer
      );
    }
    function m(e) {
      try {
        (e.pause(), (e.src = ""), e.load());
      } catch (e) {}
    }
    function p() {
      if (d()) {
        (u != null && (m(u), (u = null)),
          c != null && (c.abort(), (c = null)),
          e++);
        var t = e;
        s = t;
        var n = r("WAWebCallCollection").activeCall,
          a = n == null ? void 0 : n.peerJid,
          i = o("WAWebAuraRingtonePlayback").getRingtoneURL(a);
        if (i != null) {
          var l = new window.Audio(i);
          ((l.loop = !0), (u = l));
          var p = new AbortController();
          c = p;
          var _ = { signal: p.signal };
          (l.addEventListener(
            "play",
            function () {
              s !== t && m(l);
            },
            _,
          ),
            l.addEventListener(
              "playing",
              function () {
                s !== t && m(l);
              },
              _,
            ),
            l
              .play()
              .then(function () {
                s !== t && m(l);
              })
              .catch(r("WAWebNoop")));
        }
      }
    }
    function _() {
      ((s = -1),
        c != null && (c.abort(), (c = null)),
        u != null && (m(u), (u = null)));
    }
    ((l.playCallRingtone = p), (l.stopCallRingtone = _));
  },
  98,
);
