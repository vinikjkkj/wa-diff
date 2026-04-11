__d(
  "WAWebWAWCCommon",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      (e.version(1).stores({ logs: "line,log" }),
        e.version(2).stores({ logs: "line,log", assets: "key,hash,data" }),
        e
          .version(3)
          .stores({
            logs: "line,log",
            assets: "key,hash,data",
            wam: ",buffer,prevValues,lastSend",
          }),
        e
          .version(4)
          .stores({
            logs: "line,log",
            assets: "key,hash,data",
            wam: ",key,buffer",
            l10n: "key,hash,t",
          }),
        e
          .version(5)
          .stores({
            logs: "line,log",
            assets: null,
            wam: ",key,buffer",
            l10n: "key,hash,t",
          }),
        e
          .version(6)
          .stores({
            logs: "line,log,timestamp",
            wam: ",key,buffer",
            l10n: "key,hash,t",
          }),
        e
          .version(7)
          .stores({
            logs: "line,log,timestamp",
            wam: ",key,buffer",
            l10n: "key,hash,t",
            user: "key",
          }),
        e
          .version(8)
          .stores({
            logs: "line,log,timestamp",
            wam: ",key,buffer,channel",
            l10n: "key,hash,t",
            user: "key",
          }),
        e
          .version(9)
          .stores({
            logs: "line,log,timestamp",
            wam: ",key,buffer,channel",
            wam_meta: "streamId,seqNum",
            l10n: "key,hash,t",
            user: "key",
          }),
        e
          .version(10)
          .stores({
            logs: "line,log,timestamp",
            wam: ",key,buffer,channel",
            wam_meta: "streamId,seqNum",
            ps_meta: "key, value, rotateInDays, lastRotationTimeUtc",
            ps_tokens: "key",
            l10n: "key,hash,t",
            user: "key",
          }),
        e
          .version(11)
          .stores({
            logs: "line,log,timestamp",
            wam: ",key,buffer,channel",
            wam_meta: "streamId,seqNum",
            ps_meta: "key, value, rotateInDays, lastRotationTimeUtc",
            ps_tokens: "key",
            l10n: "key,hash,t",
            user: "key",
            core_wam: "key, streamId",
            core_wam_meta: "streamId",
          }),
        e
          .version(12)
          .stores({
            logs: "line,log,timestamp",
            wam: ",key,buffer,channel",
            wam_meta: "streamId,seqNum",
            ps_meta: "key, value, rotateInDays, lastRotationTimeUtc",
            ps_tokens: "key",
            l10n: "key,hash,t",
            user: "key",
            core_wam: "key, streamId",
            core_wam_meta: "streamId",
            worker_wam_events: "++id",
          }),
        e.version(13).stores({ logs: "line,timestamp" }),
        e.version(14).stores({ logs: "line,timestamp,&count" }));
    }
    i.applyVersions = e;
  },
  66,
);
