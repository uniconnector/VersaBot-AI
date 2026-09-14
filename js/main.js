// CKEditor Instance
let editorInstance;

// Mock History Data
const historyData = [
    {
        id: 1,
        title: "人工智能在医学领域的应用研究",
        type: "本科毕业设计",
        date: "2026-09-01 21:31:12",
        wordCount: 3856,
        status: "editing",
        content: `<h2>摘要</h2>
<p>随着人工智能技术的快速发展，其在医学领域的应用日益广泛。本文系统研究了人工智能在医学影像诊断、疾病预测、药物研发和个性化治疗等方面的应用现状与发展趋势。</p>
<h2>第一章 绪论</h2>
<h3>1.1 研究背景与意义</h3>
<p>人工智能作为新一轮科技革命和产业变革的核心驱动力，正在深刻改变着人类社会的生产生活方式。</p>
<h3>1.2 国内外研究现状</h3>
<p>目前，国际上在医学AI领域已取得显著进展。IBM Watson、Google DeepMind等公司在疾病诊断、药物发现等方面取得了突破性成果。国内方面，腾讯觅影、阿里健康等企业也在医学影像分析、智能问诊等领域取得了重要进展。</p>

<h3>1.3 研究内容与方法</h3>
<p>本研究采用文献研究法、案例分析法和比较研究法，系统梳理AI在医学领域的应用场景，分析技术实现路径，评估应用效果，并提出优化建议。</p>

<h2>第二章 人工智能技术概述</h2>
<h3>2.1 机器学习算法</h3>
<ul>
<li><strong>监督学习：</strong>包括支持向量机（SVM）、随机森林、神经网络等，广泛应用于疾病分类和预测</li>
<li><strong>深度学习：</strong>卷积神经网络（CNN）在医学影像识别中表现出色，循环神经网络（RNN）适用于时序数据分析</li>
<li><strong>强化学习：</strong>在治疗方案优化和个性化医疗决策中发挥作用</li>
</ul>

<h3>2.2 自然语言处理技术</h3>
<p>NLP技术在电子病历分析、医学文献挖掘、智能问诊系统等方面具有重要应用价值。通过文本分类、实体识别、关系抽取等技术，可以从海量医学文本中提取有价值的信息。</p>

<h3>2.3 计算机视觉技术</h3>
<p>基于深度学习的图像识别技术，在X光片、CT、MRI等医学影像分析中实现了高精度自动诊断，显著提升了诊断效率和准确性。</p>

<h2>第三章 人工智能在医学影像诊断中的应用</h2>
<h3>3.1 肺部CT影像分析</h3>
<p>AI系统在肺结节检测、肺癌筛查方面已达到甚至超越人类专家水平。通过深度学习算法，可以快速准确地识别微小病灶，为早期诊断提供重要支持。</p>

<h3>3.2 眼底图像识别</h3>
<p>糖尿病视网膜病变、青光眼等眼底疾病的AI辅助诊断系统已在临床广泛应用，实现了大规模筛查和早期干预。</p>

<h3>3.3 病理切片分析</h3>
<p>数字病理结合AI技术，可以实现癌细胞自动识别、分级和预后评估，减轻病理医生工作负担，提高诊断一致性。</p>

<h2>第四章 人工智能在疾病预测与预防中的应用</h2>
<h3>4.1 慢性病风险预测</h3>
<p>基于大数据和机器学习的心血管疾病、糖尿病等慢性病风险预测模型，可以实现早期预警和精准干预。</p>

<h3>4.2 传染病监测预警</h3>
<p>AI技术在疫情预测、传播路径分析、防控策略优化等方面发挥了重要作用，为公共卫生决策提供科学依据。</p>

<h2>第五章 人工智能在药物研发中的应用</h2>
<h3>5.1 药物靶点发现</h3>
<p>利用AI技术分析基因组、蛋白质组等生物大数据，可以快速识别潜在药物靶点，缩短研发周期。</p>

<h3>5.2 药物分子设计</h3>
<p>深度学习模型可以预测化合物活性、毒性和药代动力学性质，加速先导化合物优化过程。</p>

<h2>第六章 挑战与展望</h2>
<h3>6.1 面临的主要挑战</h3>
<ol>
<li><strong>数据质量与隐私保护：</strong>医学数据标准化程度低，隐私保护要求高</li>
<li><strong>算法可解释性：</strong>深度学习模型的"黑箱"特性影响临床信任度</li>
<li><strong>伦理法律问题：</strong>AI医疗决策的责任归属尚不明确</li>
<li><strong>临床验证不足：</strong>多数AI系统缺乏大规模随机对照试验验证</li>
</ol>

<h3>6.2 未来发展方向</h3>
<p>未来医学AI将向多模态融合、可解释AI、联邦学习、人机协同等方向发展。随着技术的不断成熟和监管政策的完善，AI将在精准医疗、智慧医院建设等方面发挥更大作用。</p>

<h2>结论</h2>
<p>人工智能正在深刻改变医学实践模式，为医疗健康事业带来前所未有的机遇。然而，技术落地仍面临诸多挑战，需要政府、医疗机构、科技企业和学术界共同努力，推动医学AI健康有序发展，最终造福广大患者。</p>

<h2>参考文献</h2>
<p>[1] Topol E J. High-performance medicine: the convergence of human and artificial intelligence[J]. Nature Medicine, 2019, 25(1): 44-56.</p>
<p>[2] 陈静, 王明. 人工智能在医学影像诊断中的应用进展[J]. 中国医学影像技术, 2020, 36(5): 641-645.</p>
<p>[3] Rajkomar A, Dean J, Kohane I. Machine learning in medicine[J]. New England Journal of Medicine, 2019, 381(14): 1347-1358.</p>
<p>[4] 李华, 张伟. 深度学习在疾病预测中的应用研究[J]. 中华医学杂志, 2021, 101(12): 856-861.</p>
<p>[5] Esteva A, Kuprel B, Novoa R A, et al. Dermatologist-level classification of skin cancer with deep neural networks[J]. Nature, 2017, 542(7639): 115-118.</p>`
    },
    {
        id: 2,
        title: "基于深度学习的图像识别技术在自动驾驶中的应用",
        type: "研究生论文",
        date: "2026-08-28 14:20:05",
        wordCount: 12500,
        status: "completed",
        content: `<h2>摘要</h2>
<p>自动驾驶技术是人工智能领域的重要应用方向。本文深入探讨了深度学习在图像识别中的关键作用...</p>
<h2>第一章 引言</h2>
<p>随着城市化进程加快，交通拥堵和交通事故问题日益严重...</p>`
    },
    {
        id: 3,
        title: "新媒体环境下大学生思想政治教育创新路径研究",
        type: "本科毕业论文",
        date: "2026-08-25 09:15:30",
        wordCount: 8200,
        status: "draft",
        content: `<h2>摘要</h2>
<p>新媒体技术的迅猛发展为大学生思想政治教育带来了新的机遇与挑战...</p>
<h2>一、新媒体环境的特点</h2>
<p>1. 信息传播的即时性</p>
<p>2. 互动性的增强</p>`
    }
];

let currentHistoryId = null;

// Initialize CKEditor
ClassicEditor
    .create(document.querySelector('#editor'), {
        toolbar: [
            'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', '|',
            'blockQuote', 'insertTable', '|', 'undo', 'redo'
        ],
        heading: {
            options: [
                { model: 'paragraph', title: '段落', class: 'ck-heading_paragraph' },
                { model: 'heading1', view: 'h1', title: '标题1', class: 'ck-heading_heading1' },
                { model: 'heading2', view: 'h2', title: '标题2', class: 'ck-heading_heading2' },
                { model: 'heading3', view: 'h3', title: '标题3', class: 'ck-heading_heading3' }
            ]
        },
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells']
        }
    })
    .then(editor => {
        editorInstance = editor;
        
        editor.model.document.on('change:data', () => {
            updateStats();
        });
        
        // Load initial content
        if (historyData.length > 0) {
            editor.setData(historyData[0].content);
        }
        updateStats();
    })
    .catch(error => {
        console.error('CKEditor initialization failed:', error);
    });

// Render History List
function renderHistoryList() {
    const listContainer = document.getElementById('historyList');
    
    if (historyData.length === 0) {
        listContainer.innerHTML = `
            <div class="history-empty">
                <i class="fas fa-folder-open"></i>
                <p>暂无历史记录</p>
            </div>
        `;
        return;
    }

    listContainer.innerHTML = historyData.map(item => `
        <div class="history-item ${currentHistoryId === item.id ? 'active' : ''}" data-id="${item.id}">
            <div class="history-item-header">
                <div class="history-item-title">${item.title}</div>
                <div class="history-item-tag">${item.type}</div>
            </div>
            <div class="history-item-meta">
                <span><i class="far fa-clock"></i> ${item.date}</span>
                <span><i class="fas fa-font"></i> ${item.wordCount}字</span>
            </div>
            <div class="history-item-actions">
                <button class="history-btn" onclick="event.stopPropagation(); deleteHistory(${item.id})">
                    <i class="fas fa-trash"></i> 删除
                </button>
                <button class="history-btn primary" onclick="event.stopPropagation(); loadHistory(${item.id})">
                    <i class="fas fa-folder-open"></i> 打开
                </button>
            </div>
        </div>
    `).join('');
}

// Toggle History Drawer
function toggleHistoryDrawer() {
    const drawer = document.getElementById('historyDrawer');
    const overlay = document.getElementById('historyOverlay');
    const btn = document.getElementById('historyBtn');
    
    drawer.classList.toggle('open');
    overlay.classList.toggle('show');
    btn.classList.toggle('active-history');
    
    if (drawer.classList.contains('open')) {
        renderHistoryList();
    }
}

// Load History Record
function loadHistory(id) {
    const record = historyData.find(item => item.id === id);
    if (!record) return;

    currentHistoryId = id;
    
    // Show loading
    const loading = document.getElementById('mainLoading');
    loading.classList.add('show');
    
    // Close drawer
    toggleHistoryDrawer();
    
    // Simulate network delay
    setTimeout(() => {
        // Update Editor Content
        if (editorInstance) {
            editorInstance.setData(record.content);
        }
        
        // Update UI Elements
        document.getElementById('editorTitleDisplay').textContent = record.title;
        document.getElementById('editorDateDisplay').textContent = record.date;
        document.getElementById('editorTypeDisplay').textContent = record.type;
        document.getElementById('paperTitle').value = record.title;
        document.getElementById('finalTitle').textContent = record.title;
        document.getElementById('finalTag').textContent = record.type;
        document.getElementById('finalDate').textContent = record.date;
        
        // Switch to Step 2
        switchStep(2);
        
        // Hide loading
        loading.classList.remove('show');
        
        // Show toast
        showToast(`已加载: ${record.title}`);
        
        // Update stats
        updateStats();
    }, 800);
}

// Delete History
function deleteHistory(id) {
    if (confirm('确定要删除这条历史记录吗？')) {
        const index = historyData.findIndex(item => item.id === id);
        if (index > -1) {
            historyData.splice(index, 1);
            renderHistoryList();
            document.getElementById('historyCount').textContent = historyData.length;
            showToast('记录已删除');
            
            if (currentHistoryId === id) {
                currentHistoryId = null;
            }
        }
    }
}

// Update Statistics
function updateStats() {
    if (!editorInstance) return;
    
    const data = editorInstance.getData();
    const text = data.replace(/<[^>]*>/g, '');
    const wordCount = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    const charCount = text.length;
    
    document.getElementById('wordCount').textContent = wordCount.toLocaleString();
    document.getElementById('charCount').textContent = charCount.toLocaleString();
    document.getElementById('lastSave').textContent = '刚刚';
}

// Switch Step
function switchStep(step) {
    // Hide all steps
    document.querySelectorAll('.step-content').forEach(content => {
        content.style.display = 'none';
    });
    
    // Show selected step
    document.getElementById(`step${step}`).style.display = 'block';
    
    // Update step cards
    document.querySelectorAll('.step-card').forEach((card, index) => {
        card.classList.remove('active', 'completed');
        
        if (index + 1 === step) {
            card.classList.add('active');
        } else if (index + 1 < step) {
            card.classList.add('completed');
        }
    });
    
    // Update progress bar
    const progress = (step / 3) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    
    // Close sidebar on mobile
    if (window.innerWidth <= 1024) {
        toggleSidebar();
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Select Paper Type
function selectType(element) {
    document.querySelectorAll('.type-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');
}

// Generate Outline
function generateOutline() {
    const title = document.getElementById('paperTitle').value;
    
    if (!title || title.length < 5) {
        showToast('请输入完整的论文题目（至少5个字）', 'error');
        document.getElementById('paperTitle').focus();
        return;
    }
    
    // Simulate generation
    const btn = event.target.closest('.btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 生成中...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        // Add to history
        const newRecord = {
            id: Date.now(),
            title: title,
            type: "本科毕业设计",
            date: new Date().toLocaleString('zh-CN'),
            wordCount: 0,
            status: "editing",
            content: `<h2>摘要</h2><p>正在生成${title}的大纲...</p>`
        };
        historyData.unshift(newRecord);
        document.getElementById('historyCount').textContent = historyData.length;
        
        switchStep(2);
        showToast('大纲生成成功！');
    }, 2000);
}

// Reset Editor
function resetEditor() {
    if (confirm('确定要重置编辑器内容吗？这将清除所有修改。')) {
        if (editorInstance && currentHistoryId) {
            const record = historyData.find(item => item.id === currentHistoryId);
            if (record) {
                editorInstance.setData(record.content);
                showToast('已重置为初始内容');
            }
        }
    }
}

// Export Document
function exportDoc() {
    if (!editorInstance) return;
    
    const content = editorInstance.getData();
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '论文大纲.html';
    a.click();
    URL.revokeObjectURL(url);
    
    showToast('文档已导出！');
}

// Generate Full Text
function generateFullText() {
    if (!editorInstance) return;
    
    const content = editorInstance.getData();
    if (content.length < 100) {
        showToast('内容过短，请完善大纲后再继续。', 'error');
        return;
    }
    
    const btn = event.target.closest('.btn');
    const originalText = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 生成中...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        
        switchStep(3);
        showToast('全文生成成功！');
    }, 3000);
}

// Save Draft
function saveDraft() {
    if (!editorInstance) return;
    
    const content = editorInstance.getData();
    localStorage.setItem('paper_draft', content);
    document.getElementById('lastSave').textContent = '刚刚';
    showToast('草稿已保存');
}

// Toggle Sidebar (Mobile)
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
}

// Show Toast
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const toastIcon = toast.querySelector('.toast-icon');
    
    toastMessage.textContent = message;
    
    if (type === 'error') {
        toast.style.borderLeftColor = 'var(--danger)';
        toastIcon.className = 'fas fa-exclamation-circle toast-icon';
        toastIcon.style.color = 'var(--danger)';
    } else {
        toast.style.borderLeftColor = 'var(--primary)';
        toastIcon.className = 'fas fa-check-circle toast-icon';
        toastIcon.style.color = 'var(--primary)';
    }
    
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Radio Button Styling
document.querySelectorAll('.radio-item').forEach(item => {
    item.addEventListener('click', function() {
        const groupName = this.querySelector('input[type="radio"]').name;
        document.querySelectorAll(`.radio-item input[name="${groupName}"]`).forEach(radio => {
            radio.closest('.radio-item').classList.remove('active');
        });
        this.classList.add('active');
    });
});

// Auto-save simulation
setInterval(() => {
    if (editorInstance) {
        const content = editorInstance.getData();
        localStorage.setItem('paper_draft', content);
        document.getElementById('lastSave').textContent = '刚刚';
    }
}, 30000);

// Load draft on page load
window.addEventListener('load', () => {
    renderHistoryList();
    const draft = localStorage.getItem('paper_draft');
    if (draft && editorInstance) {
        // editorInstance.setData(draft); // Optional: auto-load draft
    }
});