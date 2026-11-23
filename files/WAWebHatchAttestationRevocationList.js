__d(
  "WAWebHatchAttestationRevocationList",
  ["WAWebHatchAttestationProtobufReader"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Uint8Array(0);
    function s(e) {
      var t = new (o(
          "WAWebHatchAttestationProtobufReader",
        ).HatchAttestationProtobufReader)(e),
        n = new Map();
      return (
        o("WAWebHatchAttestationProtobufReader").readFields(
          t,
          t.len,
          function (e) {
            if (e === 1) {
              var r = u(t),
                o = r[0],
                a = r[1];
              n.set(o, a);
            } else if (e === 2) t.skipUint64();
            else return !1;
            return !0;
          },
        ),
        n
      );
    }
    function u(e) {
      for (
        var t = o("WAWebHatchAttestationProtobufReader").embeddedMessageEnd(e),
          n = "",
          r = [];
        e.pos < t;
      ) {
        var a = e.tag(),
          i = a.fieldNo;
        i === 1 ? (n = e.string()) : i === 2 && (r = c(e));
      }
      return [n, r];
    }
    function c(e) {
      var t = [];
      return (
        o("WAWebHatchAttestationProtobufReader").readFields(
          e,
          o("WAWebHatchAttestationProtobufReader").embeddedMessageEnd(e),
          function (n) {
            return n !== 1 ? !1 : (t.push(d(e)), !0);
          },
        ),
        t
      );
    }
    function d(t) {
      var n = "",
        r = e;
      return (
        o("WAWebHatchAttestationProtobufReader").readFields(
          t,
          o("WAWebHatchAttestationProtobufReader").embeddedMessageEnd(t),
          function (e) {
            if (e === 1) n = t.string();
            else if (e === 2) r = t.bytes();
            else if (e === 3) t.string();
            else if (e === 4) t.skipUint64();
            else return !1;
            return !0;
          },
        ),
        { namespaceName: n, digest: r }
      );
    }
    l.decodeRevocationList = s;
  },
  98,
);
