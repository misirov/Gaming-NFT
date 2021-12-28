const CONTRACT_ADDRESS = '0xAa6d972dC3c7406AE5d060F4AFB5b7374a999B15';

const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
  };
  
export { CONTRACT_ADDRESS, transformCharacterData };

