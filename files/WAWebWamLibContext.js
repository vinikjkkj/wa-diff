__d(
  "WAWebWamLibContext",
  [
    "WABase64",
    "WABinary",
    "WALogger",
    "WAWebEventSampling",
    "WAWebWamBeaconing",
    "WAWebWamCodegenUtils",
    "WAWebWamConstants",
    "WAWebWamLibProtocol",
    "WAWebWamPrivateStats",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 47,
      u = 3433,
      c = 6005,
      d = 0,
      m = 1,
      p = 2,
      _ = 2147483647,
      f = (function () {
        function t(e, t, n) {
          ((this.bufferKey = e),
            (this.buffer = new (o("WABinary").Binary)(void 0, !0)),
            this.buffer.writeString("WAM"),
            this.buffer.writeUint8(o("WAWebWamConstants").WAM_PROTOCOL_VERSION),
            this.buffer.writeUint8(1),
            this.buffer.writeUint16(t),
            this.bufferKey === "regular"
              ? this.buffer.writeUint8(d)
              : this.bufferKey === "realtime"
                ? this.buffer.writeUint8(m)
                : this.buffer.writeUint8(p),
            (this.eventsWritten = 0),
            (this.prevGlobals = {}),
            (this.dirtyGlobals = {}),
            (this.unsavedPortion = null),
            (this.saveKey = String((Math.random() * 1e9) | 0)),
            this.$1(n));
        }
        var n = t.prototype;
        return (
          (n.size = function () {
            return this.buffer.size();
          }),
          (n.set = function (t, n) {
            ((this.dirtyGlobals[String(t)] = n),
              this.unsavedPortion && this.unsavedPortion.set(t, n));
          }),
          (n.write = function (n) {
            var t,
              r = this.buffer;
            this.set(s, n.commitTime);
            var a = o("WAWebWamBeaconing").maybeGetEventSequenceNumber(
              this.bufferKey,
            );
            (a != null && this.set(u, a),
              n.wamChannel === "private" &&
                this.set(
                  c,
                  o("WAWebWamPrivateStats")
                    .getLatestPrivateStatsIdValueFromKey(this.bufferKey)
                    .toString(),
                ),
              this.$2());
            for (
              var i = n.all, l = Object.keys(i), d = -1, m = !1, p = 0;
              p < l.length;
              p++
            ) {
              var f = i[l[p]];
              f != null && ((d = p), (m = !0));
            }
            var g =
              (t = o("WAWebEventSampling").getClientEventSamplingWeight(
                n.id,
              )) != null
                ? t
                : n.weight;
            o("WAWebWamLibProtocol").writeEvent(r, n.id, -g, m);
            for (var h = 0; h <= d; h++) {
              var y = l[h],
                C = o("WAWebWamCodegenUtils").metrics.getEvent(n.$className, y),
                b = C.id,
                v = C.type,
                S = i[y];
              if (S != null) {
                if (
                  (typeof S == "boolean" && (S = S ? 1 : 0),
                  (m = h < d),
                  v === "timer" && S > _)
                ) {
                  o("WALogger")
                    .ERROR(
                      e ||
                        (e = babelHelpers.taggedTemplateLiteralLoose([
                          "[wam] invalid value for timer field ",
                          ".",
                          "",
                        ])),
                      n.$className,
                      y,
                    )
                    .sendLogs("wam-event-validation-error");
                  continue;
                }
                o("WAWebWamLibProtocol").writeField(r, b, S, m);
              }
            }
            (this.eventsWritten++,
              this.unsavedPortion && this.unsavedPortion.write(n));
          }),
          (n.stringBuffer = function () {
            return this.eventsWritten > 0
              ? o("WABase64").encodeB64(
                  this.buffer.peek(function (e) {
                    return e.readByteArrayView();
                  }),
                )
              : "";
          }),
          (n.getBuffer = function () {
            return this.buffer;
          }),
          (n.$1 = function (t) {
            var e = (function (e) {
              return e === "regular" || e === "realtime"
                ? "regular"
                : "private";
            })(this.bufferKey);
            for (var n in t) {
              var r = t[n],
                a = o("WAWebWamCodegenUtils").metrics.getGlobal(n),
                i = a.channels.includes(e);
              r !== void 0 &&
                i &&
                this.set(o("WAWebWamCodegenUtils").metrics.getGlobal(n).id, r);
            }
          }),
          (n.$2 = function () {
            var e = this.dirtyGlobals,
              t = this.prevGlobals;
            for (var n in e) {
              var r = e[n];
              if (typeof r == "boolean") r = r ? 1 : 0;
              else if (r === void 0) r = null;
              else if (Number.isNaN(r)) continue;
              if (r !== t[n] || n === String(s) || n === String(c)) {
                t[n] = r;
                var a = parseInt(n, 10);
                o("WAWebWamLibProtocol").writeGlobalAttribute(
                  this.buffer,
                  a,
                  r,
                );
              }
            }
            this.dirtyGlobals = {};
          }),
          t
        );
      })();
    l.WamContext = f;
  },
  98,
);
