__d(
  "cometComposerCheckMediaAttachmentsForPhoto3d",
  ["QPLUserFlow", "qpl"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (e) {
        var n = e.reduce(function (e, t) {
          return (
            t.state === "UPLOADED" && t.fileType === "PHOTO" && e.push(t),
            e
          );
        }, []);
        if (!(e.length !== 2 || n.length !== 2)) {
          var o = s(n),
            a = u(o);
          a != null &&
            (r("QPLUserFlow").start(r("qpl")._(37631558, "4977")),
            r("QPLUserFlow").addPoint(
              r("qpl")._(37631558, "4977"),
              "three_d_photo_creation_data_provided",
            ),
            t({
              colorImageIds: a.colorImageIds,
              depthImageIds: a.depthImageIds,
              placeholderImage: a.placeholderImage,
              type: "SET_PHOTO3D_CREATION_DATA",
            }),
            t({ attachmentType: "PHOTO3D", type: "ACTIVATE_ATTACHMENT_TYPE" }));
        }
      }
    }
    function s(e) {
      var t = {},
        n = ["jpg", "jpeg", "png"];
      return (
        e.forEach(function (e) {
          var r = e.file.name;
          if (r) {
            var o = r.lastIndexOf(".");
            if (!(o < 0)) {
              var a = r.split(".").pop();
              if (a != null) {
                var i = a.toLowerCase();
                if (n.includes(i)) {
                  var l = r.substring(0, o).toLowerCase(),
                    s = l.split("_"),
                    u = s.pop();
                  if (
                    s.length > 0 &&
                    u != null &&
                    u.toLowerCase() === "depth"
                  ) {
                    var c = s.join("_");
                    (c in t || (t[c] = { colorImage: null, depthImage: null }),
                      (t[c].depthImage = e));
                  } else
                    (l in t || (t[l] = { colorImage: null, depthImage: null }),
                      (t[l].colorImage = e));
                }
              }
            }
          }
        }),
        t
      );
    }
    function u(e) {
      var t = Object.keys(e).sort();
      if (t.length === 0) return null;
      var n = [],
        r = [],
        o = null;
      return (
        t.forEach(function (t) {
          var a = e[t],
            i = a.colorImage,
            l = a.depthImage;
          if (!i || !l) return null;
          var s = i.entID,
            u = l.entID;
          if (s == null || u == null) return null;
          (o == null && (o = i), n.push(s), r.push(u));
        }),
        n.length === 0 || n.length !== r.length || o === null
          ? null
          : { colorImageIds: n, depthImageIds: r, placeholderImage: o }
      );
    }
    l.default = e;
  },
  98,
);
