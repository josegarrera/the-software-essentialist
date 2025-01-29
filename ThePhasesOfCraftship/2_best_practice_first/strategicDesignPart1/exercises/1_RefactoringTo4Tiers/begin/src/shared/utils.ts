
function isMissingKeys(data: Record<string, any> , keysToCheckFor: string[]) {
  return keysToCheckFor.some(key => data[key] === undefined);
}

function parseForResponse(data: unknown) {
  try {
    return JSON.parse(JSON.stringify(data));
  } catch {
    return null;
  }
}

function isUUID(id: string) {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(id);
}

export { isMissingKeys, parseForResponse, isUUID };
