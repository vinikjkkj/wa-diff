__d(
  "oz-player/utils/OzTaggedTimeRanges",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
      function e(e) {
        ((this.$1 = []),
          (this.$2 = 0),
          (this.$3 = 0),
          (this.$4 =
            e ||
            function (e, t) {
              return e === t;
            }));
      }
      var t = e.prototype;
      return (
        (t.add = function (t, n, r) {
          if (!(n < t) && n !== t) {
            if (this.$1.length === 0) {
              this.$1.push({ startTime: t, endTime: n, tag: r });
              return;
            }
            for (var e = 0, o = 0, a = 0; a < this.$1.length; a++) {
              if (t === this.$1[a].startTime && n === this.$1[a].endTime) {
                ((e = a), (o = a + 1));
                break;
              }
              if (
                (t >= this.$1[a].startTime && (e = a + 1),
                n <= this.$1[a].endTime && (o = a),
                n < this.$1[a].startTime)
              )
                break;
            }
            (this.$1.splice(e, o - e, { startTime: t, endTime: n, tag: r }),
              this.$5(e));
          }
        }),
        (t.$5 = function (t) {
          var e = t,
            n = this.$1[e],
            r = null;
          (e !== 0 && (r = this.$1[e - 1]),
            r !== null &&
              (this.$4(r.tag, n.tag)
                ? r.endTime >= n.startTime &&
                  (this.$1.splice(e - 1, 2, {
                    startTime: r.startTime,
                    endTime: Math.max(n.endTime, r.endTime),
                    tag: n.tag,
                  }),
                  e--)
                : (r.endTime > n.startTime && r.startTime === n.startTime
                    ? (this.$1.splice(e - 1, 1), e--)
                    : r.endTime > n.startTime &&
                      this.$1.splice(e - 1, 1, {
                        startTime: r.startTime,
                        endTime: n.startTime,
                        tag: r.tag,
                      }),
                  r.endTime > n.endTime &&
                    this.$1.splice(e + 1, 0, {
                      startTime: n.endTime,
                      endTime: r.endTime,
                      tag: r.tag,
                    }))));
          var o = null;
          (e !== this.$1.length - 1 && (o = this.$1[e + 1]),
            o &&
              (this.$4(o.tag, n.tag)
                ? o.startTime <= n.endTime &&
                  this.$1.splice(e, 2, {
                    startTime: n.startTime,
                    endTime: Math.max(o.endTime, n.endTime),
                    tag: n.tag,
                  })
                : o.startTime <= n.endTime &&
                  (o.endTime < n.endTime
                    ? (this.$1.splice(e, 1, {
                        startTime: n.startTime,
                        endTime: o.startTime,
                        tag: n.tag,
                      }),
                      this.$1.push({
                        startTime: o.endTime,
                        endTime: n.endTime,
                        tag: n.tag,
                      }))
                    : this.$1.splice(e + 1, 1, {
                        startTime: n.endTime,
                        endTime: o.endTime,
                        tag: o.tag,
                      }))));
        }),
        (t.get = function (t) {
          for (
            var e = t >= this.$3 ? this.$2 : 0, n = null, r = e;
            r < this.$1.length;
            r++
          )
            if (this.$1[r].startTime <= t && t < this.$1[r].endTime) {
              n = r;
              break;
            }
          return (
            (this.$2 = n === null ? 0 : n),
            (this.$3 = t),
            n === null ? null : this.$1[n].tag
          );
        }),
        (t.getLength = function () {
          return this.$1.length;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
