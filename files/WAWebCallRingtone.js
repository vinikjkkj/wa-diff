__d(
  "WAWebCallRingtone",
  [
    "WAWebCallCollection",
    "WAWebNoop",
    "WAWebVoipWaCallEnums",
    "bx",
    "cr:34983",
  ],
  function (t, n, r, o, a, i, l) {
    var e = r("bx").getURL(r("bx")("78755"));
    function s(t) {
      return n("cr:34983") != null ? n("cr:34983").getRingtoneURL(t) : e;
    }
    var u = 0,
      c = -1,
      d = null,
      m = null;
    function p() {
      var e = r("WAWebCallCollection").activeCall;
      if (e == null) return !1;
      var t = e.getState();
      return (
        t === o("WAWebVoipWaCallEnums").CallState.ReceivedCall ||
        t === o("WAWebVoipWaCallEnums").CallState.ReceivedCallWithoutOffer
      );
    }
    function _(e) {
      try {
        (e.pause(), (e.src = ""), e.load());
      } catch (e) {}
    }
    function f() {
      if (p()) {
        (d != null && (_(d), (d = null)),
          m != null && (m.abort(), (m = null)),
          u++);
        var e = u;
        c = e;
        var t = r("WAWebCallCollection").activeCall,
          n = t == null ? void 0 : t.peerJid,
          o = s(n);
        if (o != null) {
          var a = new window.Audio(o);
          ((a.loop = !0), (d = a));
          var i = new AbortController();
          m = i;
          var l = { signal: i.signal };
          (a.addEventListener(
            "play",
            function () {
              c !== e && _(a);
            },
            l,
          ),
            a.addEventListener(
              "playing",
              function () {
                c !== e && _(a);
              },
              l,
            ),
            a
              .play()
              .then(function () {
                c !== e && _(a);
              })
              .catch(r("WAWebNoop")));
        }
      }
    }
    function g() {
      ((c = -1),
        m != null && (m.abort(), (m = null)),
        d != null && (_(d), (d = null)));
    }
    ((l.playCallRingtone = f), (l.stopCallRingtone = g));
  },
  98,
);
