__d(
  "WAWebPaymentDetailsImage",
  [
    "WAWebCanvasUtils",
    "WAWebEnvironment",
    "WAWebFileSaver",
    "WAWebFileSaverTypes",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e = "image/jpeg",
      s = "WA-Pix-Receipt-",
      u = 360,
      c = 3,
      d = 20,
      m = 24,
      p = u - 2 * d,
      _ = "#FFFFFF",
      f = "#E9EDEF",
      g = "#0A0A0A",
      h = "#5B6368",
      y =
        'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      C = { color: g, font: "400 32px " + y, lineHeight: 40 },
      b = { color: h, font: "400 15px " + y, lineHeight: 20 },
      v = { color: g, font: "500 16px " + y, lineHeight: 22 },
      S = { color: h, font: "400 13px " + y, lineHeight: 18 },
      R = { color: h, font: "400 14px " + y, lineHeight: 20 },
      L = { color: g, font: "400 16px " + y, lineHeight: 22 },
      E = 16,
      k = 12,
      I = 6;
    async function T(t, n) {
      var a = document.createElement("canvas"),
        i = a.getContext("2d");
      if (i == null)
        throw r("err")("[payment-details-image] no 2d canvas context");
      var l = M(i, t),
        s = l.height,
        d = l.ops;
      ((a.width = u * c),
        (a.height = s * c),
        i.scale(c, c),
        (i.fillStyle = _),
        i.fillRect(0, 0, u, s),
        (i.textBaseline = "top"),
        d.forEach(function (e) {
          return A(i, e);
        }));
      var m = await o("WAWebCanvasUtils").canvasToBlob(a, e);
      if (m == null)
        throw r("err")("[payment-details-image] the canvas produced no image");
      return new File(
        [m],
        "" + D(n) + o("WAWebFileSaverTypes").AllowedFileExtensions.JPG,
        { type: e },
      );
    }
    function D(e) {
      return "" + s + e;
    }
    function x() {
      if (r("WAWebEnvironment").isWindows) return !1;
      try {
        return (
          navigator.share != null &&
          (navigator.canShare == null
            ? void 0
            : navigator.canShare({
                files: [new File([], "payment-details.jpg", { type: e })],
              })) === !0
        );
      } catch (e) {
        return !1;
      }
    }
    async function $(e) {
      try {
        var t =
          navigator.share == null ? void 0 : navigator.share({ files: [e] });
        return t == null ? "failed" : (await t, "shared");
      } catch (e) {
        return e instanceof DOMException && e.name === "AbortError"
          ? "cancelled"
          : "failed";
      }
    }
    function P() {
      return !r("WAWebEnvironment").isWindows;
    }
    function N(e, t) {
      return o("WAWebFileSaver").FileSaver.downloadData(
        e,
        D(t),
        o("WAWebFileSaverTypes").AllowedFileExtensions.JPG,
      );
    }
    function M(e, t) {
      var n = [],
        r = m,
        o = function (o, a, i) {
          ((e.font = a.font),
            F(e, o, p).forEach(function (e) {
              (n.push({ align: i, kind: "text", style: a, text: e, y: r }),
                (r += a.lineHeight));
            }));
        };
      return (
        t.forEach(function (e, t) {
          t > 0 && (r += w(e));
          e: {
            var a = e;
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.kind === "amount" &&
              "text" in a
            ) {
              var i = a.text;
              o(i, C, "center");
              break e;
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.kind === "note" &&
              "text" in a
            ) {
              var l = a.text;
              o(l, b, "center");
              break e;
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.kind === "row" &&
              "detail" in a &&
              "title" in a
            ) {
              var s = a.detail,
                u = a.title;
              (o(u, v, "left"), s != null && o(s, S, "left"));
              break e;
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.kind === "field" &&
              "label" in a &&
              "value" in a
            ) {
              var c = a.label,
                d = a.value;
              (o(c, R, "left"), o(d, L, "left"));
              break e;
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.kind === "divider"
            ) {
              (n.push({ kind: "divider", y: r }), (r += 1));
              break e;
            }
            if (
              ((typeof a == "object" && a !== null) ||
                typeof a == "function") &&
              a.kind === "section" &&
              "text" in a
            ) {
              var m = a.text;
              o(m, v, "left");
              break e;
            }
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                a,
            );
          }
        }),
        { height: Math.ceil(r + m), ops: n }
      );
    }
    function w(e) {
      return e.kind === "divider" ? k : e.kind === "note" ? I : E;
    }
    function A(e, t) {
      if (t.kind === "divider") {
        ((e.fillStyle = f), e.fillRect(d, t.y, p, 1));
        return;
      }
      ((e.font = t.style.font),
        (e.fillStyle = t.style.color),
        (e.textAlign = t.align),
        e.fillText(t.text, t.align === "center" ? u / 2 : d, t.y));
    }
    function F(e, t, n) {
      var r = [];
      return (
        t
          .split(
            `
`,
          )
          .forEach(function (t) {
            var o = "";
            (t.split(" ").forEach(function (t) {
              var a = o === "" ? t : o + " " + t;
              if (e.measureText(a).width <= n) {
                o = a;
                return;
              }
              o !== "" && r.push(o);
              var i = O(e, t, n);
              (r.push.apply(r, i.slice(0, -1)), (o = i[i.length - 1]));
            }),
              r.push(o));
          }),
        r
      );
    }
    function O(e, t, n) {
      if (e.measureText(t).width <= n) return [t];
      var r = [],
        o = "";
      return (
        Array.from(t).forEach(function (t) {
          o !== "" && e.measureText(o + t).width > n
            ? (r.push(o), (o = t))
            : (o += t);
        }),
        r.push(o),
        r
      );
    }
    ((l.renderPaymentDetailsImage = T),
      (l.getPaymentDetailsImageName = D),
      (l.canSharePaymentDetailsImage = x),
      (l.sharePaymentDetailsImage = $),
      (l.canSavePaymentDetailsImage = P),
      (l.savePaymentDetailsImage = N),
      (l.wrapText = F));
  },
  98,
);
