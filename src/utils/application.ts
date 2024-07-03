export const isPad = () => {
  const userAgent = navigator.userAgent.toLowerCase();

  /**
   * 判断ipad产品
   * 1.iPad的屏幕高始终＞屏幕宽
   * 2. Mac的宽＞高
   */
  const isIpad =
    (/macintosh|mac os x/i.test(userAgent) &&
      window.screen.height > window.screen.width &&
      !userAgent.match(/(iPhonesOS)s([d_]+)/)) ||
    userAgent.match(/(iPad).*OSs([d_]+)/);

  if (isIpad) return true;

  return /ipad|window nt|android|android 3.0|xoom|sch-i800|playbook|tablet|kindle/i.test(
    userAgent,
  );
};
