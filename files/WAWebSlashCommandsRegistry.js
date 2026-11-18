__d(
  "WAWebSlashCommandsRegistry",
  [
    "WAWebSlashCommandFileATask",
    "WAWebSlashCommandFileAVC",
    "WAWebSlashCommandFileAWAVC",
    "WAWebSlashCommandRemindMe",
    "WAWebSlashCommandScheduling",
    "WAWebSlashCommandThanks",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["scheduling", "work_tools"],
      s = [
        o("WAWebSlashCommandScheduling").WAWebSlashCommandDelay,
        o("WAWebSlashCommandRemindMe").WAWebSlashCommandRemindMe,
        o("WAWebSlashCommandScheduling").WAWebSlashCommandRemindUs,
        o("WAWebSlashCommandFileATask").WAWebSlashCommandFileATask,
        o("WAWebSlashCommandFileAVC").WAWebSlashCommandFileAVC,
        o("WAWebSlashCommandFileAWAVC").WAWebSlashCommandFileAWAVC,
        o("WAWebSlashCommandThanks").WAWebSlashCommandThanks,
      ];
    ((l.SLASH_COMMAND_GROUPS = e), (l.SLASH_COMMANDS = s));
  },
  98,
);
