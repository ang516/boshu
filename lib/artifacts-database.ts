export interface Artifact {
  id: number
  name: string
  era: string
  location: string
  institution: string
  type: string
  image: string
  description: string
  discoveryYear: string
  dimensions: string
  material: string
  condition: string
  tags: string[]
  searchKeywords: string[]
}

export const artifactsDatabase: Artifact[] = [
  {
    id: 1,
    name: '长沙子弹库帛书',
    era: '战国时期',
    location: '湖南长沙',
    institution: '湖南省博物馆',
    type: '帛书文献',
    image: '/ancient-silk-scroll.jpg',
    description: '长沙子弹库帛书是一部战国中晚期的重要文献，内容包含天文、历法、占卜等多个领域的知识。这是现存最早的帛书文献之一。',
    discoveryYear: '1973年',
    dimensions: '长约70cm，宽约50cm',
    material: '丝绸',
    condition: '残缺，经过数字修复',
    tags: ['帛书', '战国', '文献', '科技'],
    searchKeywords: ['长沙', '子弹库', '帛书', '战国', '天文', '历法']
  },
  {
    id: 2,
    name: '敦煌莫高窟壁画',
    era: '唐代',
    location: '甘肃敦煌',
    institution: '敦煌研究院',
    type: '壁画',
    image: '/dunhuang-mural.jpg',
    description: '敦煌莫高窟是中国最大的佛教艺术宝库，壁画内容丰富，展现了不同时期的艺术风格。',
    discoveryYear: '古代',
    dimensions: '多件大型壁画',
    material: '矿物颜料',
    condition: '部分残缺，已修复',
    tags: ['壁画', '佛教艺术', '敦煌', '唐代'],
    searchKeywords: ['敦煌', '莫高窟', '壁画', '佛教', '唐代', '艺术']
  },
  {
    id: 3,
    name: '商代甲骨文',
    era: '商代',
    location: '河南安阳',
    institution: '中国国家博物馆',
    type: '甲骨文献',
    image: '/oracle-bone.jpg',
    description: '商代甲骨文是中国最早的成熟文字记录，记录了商代的政治、军事、宗教等重要信息。',
    discoveryYear: '1899年',
    dimensions: '多件兽骨',
    material: '龟骨、兽骨',
    condition: '完整，已保护',
    tags: ['甲骨文', '商代', '文字', '历史'],
    searchKeywords: ['商代', '甲骨', '文字', '记录', '安阳']
  },
  {
    id: 4,
    name: '越王勾践剑',
    era: '春秋战国',
    location: '浙江杭州',
    institution: '浙江省博物馆',
    type: '青铜兵器',
    image: '/placeholder.svg?key=sword01',
    description: '越王勾践剑是春秋时期的杰出青铜工艺品，以其精美的纹饰和完好的保存状态而闻名。',
    discoveryYear: '1965年',
    dimensions: '长55.7cm',
    material: '青铜',
    condition: '完整，精美',
    tags: ['青铜', '兵器', '工艺', '春秋战国'],
    searchKeywords: ['勾践', '剑', '越王', '青铜', '兵器']
  },
  {
    id: 5,
    name: '马王堆汉墓帛书',
    era: '西汉',
    location: '湖南长沙',
    institution: '湖南省博物馆',
    type: '帛书',
    image: '/featured-artifact.jpg',
    description: '马王堆汉墓帛书记录了西汉时期的重要信息，包括医学、地理、历史等方面的知识。',
    discoveryYear: '1973年',
    dimensions: '多件丝绸书籍',
    material: '丝绸',
    condition: '完整，已修复',
    tags: ['帛书', '西汉', '文献', '医学'],
    searchKeywords: ['马王堆', '汉墓', '帛书', '西汉', '医学', '长沙']
  },
  {
    id: 6,
    name: '秦始皇兵马俑',
    era: '秦代',
    location: '陕西西安',
    institution: '秦始皇兵马俑博物馆',
    type: '陶塑',
    image: '/placeholder.svg?key=terracotta01',
    description: '秦始皇兵马俑是世界上最大的地下军队，展现了秦代高超的陶塑艺术和军事组织。',
    discoveryYear: '1974年',
    dimensions: '8000余件兵马俑',
    material: '陶土',
    condition: '部分残缺，已修复',
    tags: ['兵马俑', '秦代', '陶塑', '工艺'],
    searchKeywords: ['秦始皇', '兵马俑', '陶塑', '西安', '秦代']
  }
]

export function searchArtifacts(query: string, filters?: {
  type?: string
  era?: string
  location?: string
  institution?: string
}): Artifact[] {
  const queryLower = query.toLowerCase()
  
  let results = artifactsDatabase.filter(artifact => {
    // 关键词匹配
    const matchesQuery = 
      artifact.name.toLowerCase().includes(queryLower) ||
      artifact.searchKeywords.some(kw => kw.toLowerCase().includes(queryLower)) ||
      artifact.description.toLowerCase().includes(queryLower) ||
      artifact.tags.some(tag => tag.toLowerCase().includes(queryLower))
    
    if (!matchesQuery) return false

    // 应用过滤器
    if (filters?.type && artifact.type !== filters.type) return false
    if (filters?.era && artifact.era !== filters.era) return false
    if (filters?.location && !artifact.location.includes(filters.location)) return false
    if (filters?.institution && artifact.institution !== filters.institution) return false

    return true
  })

  // 按相关性排序
  results.sort((a, b) => {
    const aScore = a.name.toLowerCase().includes(queryLower) ? 1 : 0
    const bScore = b.name.toLowerCase().includes(queryLower) ? 1 : 0
    return bScore - aScore
  })

  return results
}
