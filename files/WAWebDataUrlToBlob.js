__d(
  "WAWebDataUrlToBlob",
  ["err"],
  function (t, n, r, o, a, i, l) {
    var e = /^data:((.*?)(;charset=.*?)?)(;base64)?,/;
    function s(t) {
      var n = t.match(e);
      if (!n) throw r("err")("invalid data URI");
      var o = n[2] ? n[1] : "text/plain" + (n[3] || ";charset=US-ASCII"),
        a = !!n[4],
        i = t.slice(n[0].length),
        l;
      a ? (l = atob(i)) : (l = decodeURIComponent(i));
      for (
        var s = new ArrayBuffer(l.length), u = new Uint8Array(s), c = 0;
        c < l.length;
        c += 1
      )
        u[c] = l.charCodeAt(c);
      return new Blob([u], { type: o });
    }
    l.dataURLtoBlob = s;
  },
  98,
);
