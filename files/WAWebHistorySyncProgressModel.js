__d(
  "WAWebHistorySyncProgressModel",
  [
    "WALogger",
    "WATimeUtils",
    "WAWebBaseModel",
    "WAWebHistorySyncProgressGetters",
    "WAWebModelUtils",
    "WAWebUserPrefsHistorySync",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = 1200,
      u = 30,
      c = (function (t) {
        function n() {
          for (var e, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            (e = t.call.apply(t, [this].concat(r)) || this),
            (e.id = o("WAWebModelUtils").prop("HISTORY_SYNC_PROGRESS")),
            (e.incomplete = o("WAWebModelUtils").prop(!1)),
            (e.realProgress = o("WAWebModelUtils").prop(null)),
            (e.fakeProgress = o("WAWebModelUtils").prop(0)),
            (e.remainingPausedSeconds = o("WAWebModelUtils").prop(
              o(
                "WAWebUserPrefsHistorySync",
              ).getHistorySyncRemainingPausedSeconds(),
            )),
            (e._fakePausedCompletionTimeout = o("WAWebModelUtils").prop()),
            (e._progressIncrementTimeout = o("WAWebModelUtils").prop()),
            (e._lastUpdateSeconds = o("WAWebModelUtils").prop(
              o("WATimeUtils").unixTime(),
            )),
            babelHelpers.assertThisInitialized(e) ||
              babelHelpers.assertThisInitialized(e)
          );
        }
        babelHelpers.inheritsLoose(n, t);
        var r = n.prototype;
        return (
          (r.init = function () {
            this.remainingPausedSeconds != null &&
              this.remainingPausedSeconds > 0 &&
              this.pausedExpiryCheckpoint(0);
          }),
          (r.setPaused = function (t) {
            var e = this;
            if (t) {
              if (o("WAWebHistorySyncProgressGetters").getPaused(this)) return;
              (o(
                "WAWebUserPrefsHistorySync",
              ).setHistorySyncRemainingPausedSeconds(s),
                (this.remainingPausedSeconds = s),
                self.setTimeout(function () {
                  return e.pausedExpiryCheckpoint(u);
                }, u * 1e3));
              return;
            }
            (o(
              "WAWebUserPrefsHistorySync",
            ).setHistorySyncRemainingPausedSeconds(null),
              (this.remainingPausedSeconds = null));
          }),
          (r.pausedExpiryCheckpoint = function (n) {
            var t = this;
            self.clearTimeout(this._fakePausedCompletionTimeout);
            var r = this.remainingPausedSeconds;
            if (r != null) {
              var a = r - n;
              if (
                (o(
                  "WAWebUserPrefsHistorySync",
                ).setHistorySyncRemainingPausedSeconds(a),
                (this.remainingPausedSeconds = a),
                a <= 0)
              ) {
                o("WALogger").ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[history sync] pausedExpiryCheckpoint: ",
                      "s paused, removing UI",
                    ])),
                  s,
                );
                return;
              }
              self.setTimeout(function () {
                return t.pausedExpiryCheckpoint(u);
              }, u * 1e3);
            }
          }),
          (r.setProgress = function (t) {
            var e,
              n = (e = this.realProgress) != null ? e : 0;
            if (((this.realProgress = t), !(t <= n))) {
              ((this.fakeProgress = 0),
                self.clearTimeout(this._progressIncrementTimeout));
              var r = o("WATimeUtils").unixTime();
              if (t < 100) {
                var a = r - this._lastUpdateSeconds,
                  i = t - n,
                  l = a / i;
                this._incrementFakeProgressByOne(
                  Math.max(l, 1),
                  Math.min(i, 100 - t),
                );
              }
              this._lastUpdateSeconds = r;
            }
          }),
          (r.setIncomplete = function (t) {
            this.incomplete = t;
          }),
          (r._incrementFakeProgressByOne = function (t, n) {
            var e = this;
            (this._progressIncrementTimeout != null &&
              self.clearTimeout(this._progressIncrementTimeout),
              !(
                !o("WAWebHistorySyncProgressGetters").getInProgress(this) ||
                this.fakeProgress + 1 >= n
              ) &&
                (this._progressIncrementTimeout = self.setTimeout(function () {
                  ((e.fakeProgress += 1), e._incrementFakeProgressByOne(t, n));
                }, t * 1e3)));
          }),
          n
        );
      })(o("WAWebBaseModel").BaseModel);
    c.Proxy = "historySyncProgress";
    var d = null;
    function m() {
      if (d == null) {
        var e = new (o("WAWebBaseModel").defineModel(c))();
        (e.init(), (d = e));
      }
      return d;
    }
    ((l.HistorySyncProgressModel = c), (l.getHistorySyncProgressModel = m));
  },
  98,
);
